import React from "react";
import FormEvent from "./form/FormEvent";
import Link from "next/link";
import Image from "next/image";

const Kontakt2 = () => {
  return (
    <>
      <div className="title-style-five text-center" id="kontakt">
        <h2 className="font-roboto font-bold">
          <span>Kontakt</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-xl-5  m-auto">
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
            info@lange-malermeister.de
          </p>
          {/* <p className="mt-4 fs-5 font-slab">
            <strong>Öffnungszeiten</strong> <br />
            Montag - Freitag: 9:00 - 18:00 <br />
            Samstag: 9:00 - 12:30
          </p> */}
        </div>
        <div className="col-xl-7  m-auto">
          <FormEvent />
        </div>
      </div>
      {/* <div className="row">
        <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
          <p className="info-text">
            Already a member? <Link href="login">Sign in.</Link>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Kontakt2;
