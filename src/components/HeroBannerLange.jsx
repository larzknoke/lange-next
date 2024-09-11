import React from "react";
import Link from "next/link";
import FeatureLange from "./FeatureLange";
import Image from "next/image";

const HeroBannerLange = ({ toggleAnstrich, toggleDamm }) => {
  return (
    <div className="hero-banner-four">
      {/* <Image width="213" height="86"
        src="/images/shape/100.svg"
        alt="shape"
        className="shapes shape-four"
      /> */}
      <Image
        width="10"
        height="19"
        src="/images/shape/101.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <Image
        width="242"
        height="433"
        src="/images/shape/102.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <Image
        width="246"
        height="400"
        src="/images/shape/103.svg"
        alt="shape"
        className="shapes shape-seven"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last d-none d-lg-block">
            <div className="header-holder">
              <Image
                src="/images/lange/webp/haus.webp"
                alt="Auto Lange"
                width={800}
                height={1200}
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="1500"
              />
              <Image
                src="/images/lange/webp/laden2_hoch.webp"
                alt="Auto Lange"
                width={800}
                height={1200}
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="800"
              />
              <Image
                src="/images/lange/webp/innen.webp"
                alt="Auto Lange"
                width={800}
                height={1200}
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="200"
              />
            </div>
            {/* <p className="review-text">
              Seit mehr als <span>100</span> helfen wir Ihnen.
            </p> */}
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first  px-5 px-md-0">
            <div className="text-wrapper ">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                <span>beraten</span>
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="ps-4"
              >
                <span>planen</span>
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
                className="ps-5"
              >
                <span>ausführen</span>
              </h1>
              <div className="sub-text">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Regen, Hagel, Schnee, Schmutz – Ihr Haus hat einiges
                  auszuhalten.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  Seit mehr als 100 Jahren helfen wir Ihnen und Ihrer Immobilie
                  dabei, der Witterung zu trotzen.
                </p>
              </div>
              <Link
                href="#kontakt"
                className="theme-btn-five"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                Kontaktieren Sie uns!
              </Link>
            </div>
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="fancy-feature-eight mt-250 md-mt-100" id="leistungen">
        <div className="container">
          <div className="bg-wrapper">
            <FeatureLange
              toggleAnstrich={toggleAnstrich}
              toggleDamm={toggleDamm}
            />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-eight */}
    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default HeroBannerLange;
