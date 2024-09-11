import React from "react";
import Image from "next/image";

const Fachgeschaeft = () => {
  return (
    <div className="row align-items-center" id="laden">
      <div className="col-lg-6 px-5">
        <Image
          width={739}
          height={608}
          style={{ height: "fit-content" }}
          src="/images/lange/webp/laden3.webp"
          alt="Fachgeschäft"
          className="m-auto rounded-1"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        />
        <Image
          width={739}
          height={608}
          style={{ height: "fit-content" }}
          src="/images/lange/webp/laden.webp"
          alt="Fachgeschäft"
          className="mt-40 rounded-1"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        />
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="text-wrapper px-4 px-md-0">
          <div className="client-info font-rubik">
            Über <span>1000+ Produkte</span>
          </div>
          <div className="title-style-five">
            <h2 className="font-roboto">
              Unser <span>Fachgeschäft</span>.
            </h2>
          </div>
          <p>
            In unserem Fachgeschäft finden Sie alles, was Sie zum Renovieren und
            Gestalten benötigen:
          </p>
          <p>
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
