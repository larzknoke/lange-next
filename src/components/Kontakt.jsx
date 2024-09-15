import React, { useState } from "react";
import FormEvent from "./form/FormEvent";
import Link from "next/link";
import Image from "next/image";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Kontakt = () => {
  const [captchaConfirm, setCaptchaConfirm] = useState(false);

  return (
    <>
      <div className="title-style-five text-center" id="kontakt">
        <h2 className="font-roboto font-bold">
          <span>Kontakt</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-xl-5  m-auto px-5 px-md-0">
          <p className="font-rubik sub-heading text-start pb-4 ">
            Sie benötigen Hilfe oder Beratung? <br />
            Wir helfen Ihnen gern.
          </p>
          <Image
            width="321"
            height="4"
            src="/images/shape/114.svg"
            alt="shape"
            className="line"
          />
          <p className="mt-4 fs-5 font-roboto">
            <strong>Jörg Lange GmbH & Co. KG</strong> <br />
            Vor dem Riepenberg 10 <br />
            37696 Marienmünster <br />
          </p>
          <p className="mt-3 fs-5 font-roboto">
            Tel. 05284 - 94420 <br />
            Fax 05284 - 94421
          </p>
          <p className="mt-2 mb-4 fs-5 font-roboto">
            <a href="mailto:info@lange-malermeister.de">
              info@lange-malermeister.de
            </a>{" "}
          </p>
        </div>
        <div className="col-xl-7  m-auto">
          {captchaConfirm ? (
            <GoogleReCaptchaProvider
              reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            >
              <FormEvent />
            </GoogleReCaptchaProvider>
          ) : (
            <div className="confirmer">
              {" "}
              <FormEvent />
              <div className="confirm-wrapper">
                <button
                  className="theme-btn-five"
                  onClick={() => setCaptchaConfirm(true)}
                >
                  Google ReCaptcha akzeptieren und Formular öffnen
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Kontakt;
