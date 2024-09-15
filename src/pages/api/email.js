// backend
// /api/email

import nodemailer from "nodemailer";
import axios from "axios";

export default async function handler(req, res) {
  console.log("-- sendEmail --");

  if (req.method === "POST") {
    // Process a POST request

    const smtpOptions = {
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    };

    const contactEmail = nodemailer.createTransport({
      ...smtpOptions,
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      contactEmail.verify((error) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Ready to Send");
          resolve();
        }
      });
    });

    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message;
    const gRecaptchaToken = req.body.gRecaptchaToken;
    const secretKey = process?.env?.GOOGLE_RECAPTCHA_SECRET;

    // GOOGLE RECAPTCHA CHECK
    let resVerify;
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
    try {
      resVerify = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    } catch (e) {
      console.log("recaptcha error:", e);
    }

    if (resVerify && resVerify.data?.success && resVerify.data?.score > 0.5) {
      // SEND EMAIL
      const mailOptions = {
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.SMTP_TO_EMAIL,
        subject: "Kontaktformular | Lange Homepage",
        html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
      };

      console.log(mailOptions);

      await new Promise((resolve, reject) => {
        // send mail
        contactEmail.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Email sent: " + info.response);
            resolve(info);
          }
        });
      });

      console.log(resVerify.data);
      console.log("resVerify.data?.score:", resVerify.data?.score);

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          status: "success",
        })
      );
    } else {
      console.log("fail: resVerify.data?.score:", resVerify.data?.score);

      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          status: "fail",
        })
      );
    }
  } else {
    // Handle any other HTTP method
    res.statusCode = 404;
    res.end("Not Found");
  }
}
