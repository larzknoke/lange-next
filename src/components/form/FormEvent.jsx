import React from "react";
import { useState } from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const FormEvent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [messageCallout, setMessageCallout] = useState("");
  const [sendInProgress, setSendInProgress] = useState(false);
  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = (e) => {
    console.log("send");

    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      setMessageCallout("ReCaptcha Fehler");
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      setSendInProgress(true);
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
          gRecaptchaToken: gReCaptchaToken,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            setMessageCallout("❌ Nachricht senden fehlgeschlagen.");
          }
          setMessageCallout("✅ Nachricht erfolgreich versendet.");
          setSendInProgress(false);
          setMessageSent(true);
        })
        .catch((err) => {
          console.log(err);
          setRefreshReCaptcha(!refreshReCaptcha);
          setMessageCallout("❌ Nachricht senden fehlgeschlagen.");
          setSendInProgress(false);
          setMessageSent(true);
        });
    });
  };

  // const setTokenFunc = (getToken) => {
  //   setToken(getToken);
  //   console.log("token", token);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          required
          placeholder="Nachricht"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Nachricht absenden</button>
      </form>
      <br />
      <div className="px-5">
        {sendInProgress && <p>Senden...</p>}
        {messageSent && `${messageCallout}`}
      </div>
    </>
  );
};

export default FormEvent;
