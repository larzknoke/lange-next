import React from "react";
import Image from "next/image";

const Fachgeschaeft = () => {
  return (
    <div className="row align-items-center" id="laden">
      <div
        className="col-lg-6 px-5"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Image
          width={480}
          height={768}
          style={{ height: "fit-content" }}
          src="/images/lange/Laden.jpg"
          alt="Fachgeschäft"
          className="m-auto rounded-1"
        />
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="text-wrapper">
          <div className="client-info font-rubik">
            Über <span>1000+ Produkte</span>
          </div>
          <div className="title-style-five">
            <h2>
              Unser <span>Fachgeschäft</span>.
            </h2>
          </div>
          <p className="font-rubik">
            In unserem Fachgeschäft finden Sie alles, was Sie zum Renovieren und
            Gestalten benötigen:
          </p>
          <p className="font-rubik">
            Besuchen Sie uns und werfen Sie einen Blick in unsere
            Ausstellungsräume.
          </p>
          <div className="name font-slab">Wir freuen uns auf Sie!</div>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default Fachgeschaeft;
