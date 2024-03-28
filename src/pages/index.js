import React from "react";
import Link from "next/link";

import HeaderLange from "@/components/HeaderLange";
import HeroBannerLange from "@/components/HeroBannerLange";
import Fachgeschaeft from "@/components/Fachgeschaeft";
import FeatureLange2 from "@/components/FeatureLange2";
import Team from "@/components/Team";
import Referenzen from "@/components/Referenzen";
import FooterLange from "@/components/FooterLange";
import Kontakt from "@/components/Kontakt";
import Kontakt2 from "@/components/Kontakt2";
import Image from "next/image";

export const metadata = {
  title: "Lange Malermeister || Marienmünster",
  description: "Lange Malermeister || Marienmünster",
};

export default function Home() {
  return (
    <div className="main-page-wrapper p0">
      <HeaderLange />

      <HeroBannerLange />

      {/* 
     =============================================
				Fachgeschäft
		============================================== */}
      <div className="fancy-text-block-nineteen mt-250 mb-200 md-mt-150 md-mb-150">
        <div className="container">
          <Fachgeschaeft />
        </div>
      </div>
      {/* End  .fancy-text-block-nineteen*/}

      <div className="fancy-feature-nine">
        <Image
          width={14}
          height={19}
          src="/images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image
          width={20}
          height={17}
          src="/images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image
          width={16}
          height={24}
          src="/images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image
          width={16}
          height={24}
          src="/images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image
          width={18}
          height={22}
          src="/images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image
          width={23}
          height={18}
          src="/images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        {/* 
        =============================================
            Innenraumgestaltung
        ============================================== */}

        <div className="container">
          <div className="title-style-five text-center mb-60 md-mb-30">
            <h6 className="text-light">Wir beraten Sie gerne!</h6>
            <h2>
              <span className="text-light">Innenraumgestaltung</span>
            </h2>
          </div>
          {/* End title */}
          <div className="row justify-content-center">
            <div
              className="col-lg-5 col-md-8"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="text-wrapper pr-4 text-light">
                <p className="font-rubik text-light mb-4">
                  Bewährt oder außergewöhnlich, gemütlich oder exklusiv, wir
                  planen und gestalten Ihre Wohnräume ganz nach Ihren Wünschen.
                  Vom Bodenbelag bis zum Deckenanstrich sorgen harmonische
                  Farben, ungewöhnliche Lasuren oder moderne Techniken für einen
                  bleibenden Eindruck.
                </p>
                <h3 className="fs-2 text-light font-slab">
                  Wählen Sie zwischen:
                </h3>
                <ul className="mt-4 list-meta">
                  <li>Farbigen Anstrichen, glänzend oder matt,</li>
                  <li>Wischtechniken und Lasuren von ruhig bis bewegt,</li>
                  <li>Glätttechniken von antik bis modern,</li>
                  <li>Tapeten von glatt bis strukturiert,</li>
                  <li>
                    Bodenbelägen von Korkparkett über Laminat, Linoleum bis
                    Holzbohlen und
                  </li>
                  <li>Teppichböden von strapazierfähig bis luxuriös</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-8"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Image
                width={800}
                height={500}
                style={{ objectFit: "contain" }}
                src={`/images/lange/shape/maler3_blue.svg`}
                alt="icon"
              />
            </div>
          </div>
          {/* <FeatureLange2 /> */}
        </div>
      </div>
      {/* /.fancy-feature-nine */}

      {/* 
     =============================================
				Stellenanzeige
		============================================== */}
      <div className="fancy-text-block-six overflow-hidden mt-250 md-mt-200">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-five mb-35">
                <h6>Bewirb dich jetzt!</h6>
                <h2>
                  <span>Wir suchen einen Maler</span> (m/w/d)
                </h2>
              </div>
              {/* End title */}
              <p className="meta">
                <strong>Du sieht im Handwerk deine Berufung?</strong>
              </p>
              <p className="meta">
                Du bist motiviert, kreativ, zuverlässig, ehrgeizig, teamfähig
                und hilfsbereit? Dann bist du bei uns genau richtig!
              </p>
              <ul className="mt-4 list-meta list-orange">
                <li>Aufgabenschwerpunkte: Dämmtechnik und Putztechnik</li>
                <li>eigener Bulli sowie eigene Baustellen</li>
                <li>
                  flexible Arbeitszeiten, somit bleibt Zeit für Hobby und
                  Familie
                </li>
              </ul>
              <p className="meta">
                Sollten wir dein Interesse geweckt haben, kannst du dich gerne
                schriftlich bei uns bewerben oder direkt ein persönliches
                Gespräch mit uns vereinbaren.
              </p>
              <div className="name font-slab my-4 fs-4">
                Wir freuen uns auf Dich!
              </div>
              <Link
                href="#kontakt"
                className="theme-btn-five"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Bewirb dich jetzt!{" "}
              </Link>
              {/* <Faq /> */}
            </div>

            <div
              className="col-lg-6 col-md-8 m-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="illustration-holder d-flex justify-content-end md-mt-50">
                <Image
                  width={509}
                  height={633}
                  style={{ height: "fit-content" }}
                  src="/images/lange/Stellenanzeige.jpg"
                  alt="media"
                  className="rounded-1"
                />
                <Image
                  width={304}
                  height={304}
                  src="/images/shape/113.svg"
                  alt="media"
                  className="shapes shape-one"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
      </div>

      {/* 
     =============================================
				Pricing Section Three
		============================================== */}
      <div
        className="pricing-section-three mt-250 mb-200 md-mt-150 md-mb-150"
        id="team"
      >
        <Image
          width={13}
          height={18}
          src="/images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image
          width={20}
          height={17}
          src="/images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image
          width={16}
          height={24}
          src="/images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image
          width={26}
          height={20}
          src="/images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image
          width={17}
          height={21}
          src="/images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image
          width={22}
          height={17}
          src="/images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-50 md-mb-40">
            <h6>das sind wir</h6>
            <div className="row">
              <div className="col-lg-9 m-auto">
                <h2>Unser Team</h2>
              </div>
            </div>
          </div>

          <div className="pricing-table-area-three">
            <Team />
          </div>
          {/* /.pricing-table-area-three */}
        </div>
        {/* ./container */}
      </div>
      {/* /.pricing-section-three */}

      {/* 
     =============================================
				Client Feedback Slider
		============================================== */}
      <div className="client-feedback-slider-three mb-250 " id="referenzen">
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-50">
            <div className="row">
              <div className="col-lg-7 col-md-9 m-auto">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  Unsere <span>Referenzen.</span>
                </h2>
                <p
                  className="font-rubik fs-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Machen Sie sich selbst ein Bild von unseren Leistungen.
                </p>
              </div>
            </div>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 m-auto">
              <div className="testimonial-slider-wrapper">
                <div className="clientSliderThree">
                  <Referenzen />
                </div>
              </div>
              {/* /.testimonial-slider-wrapper */}
            </div>
          </div>
        </div>
        {/* /.container */}
        {/* <Image
          width={82}
          height={82}
          src="/images/media/img_59.png"
          alt="media"
          className="shapes shape_1"
        />
        <Image
          width={46}
          height={46}
          src="/images/media/img_60.png"
          alt="media"
          className="shapes shape_2"
        />
        <Image
          width={87}
          height={87}
          src="/images/media/img_61.png"
          alt="media"
          className="shapes shape_3"
        />
        <Image
          width={46}
          height={46}
          src="/images/media/img_62.png"
          alt="media"
          className="shapes shape_4"
        />
        <Image
          width={111}
          height={111}
          src="/images/media/img_63.png"
          alt="media"
          className="shapes shape_5"
        />
        <Image
          width={57}
          height={57}
          src="/images/media/img_64.png"
          alt="media"
          className="shapes shape_6"
        /> */}
      </div>
      <div className="faq-section-four">
        <Image
          width={182}
          height={397}
          src="/images/shape/120.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image
          width={176}
          height={433}
          src="/images/shape/121.svg"
          alt="shape"
          className="shapes shape-two"
          style={{ zIndex: 999 }}
        />
        <Image
          width={676}
          height={433}
          src="/images/lange/shape/maler1orange.svg"
          alt="shape"
          className="shapes shape-two"
          style={{ zIndex: 999, left: "-13%", top: "65%" }}
        />
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-60">
            <h6>Lange Familienbetrieb seit 1932</h6>
            <h2 className="text-white">
              <span>Unsere Geschichte</span>
            </h2>
            <Image
              width={780}
              height={330}
              src="/images/lange/team/team3.png"
              alt="Team"
              className="m-auto my-5"
            />
          </div>

          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto text-start">
              <p className="mb-3">
                Seit mehr als 70 Jahren helfen wir Ihnen und Ihrer Immobilie
                dabei, der Witterung zu trotzen. Ob Fachwerk oder Ziegel, ob
                Erstanstrich oder Renovierung: Wir sind die Spezialisten für
                ästhetische Fassadengestaltung und effektiven Langzeitschutz.
              </p>
              <p className="my-3">
                Darüber hinaus sorgen modernste Wärmedämmtechniken für geringe
                Heizkosten. Wir bieten Ihnen von der Wärmeschutzberechnung bis
                zum fachgerechten Anbringen des Wärmeverbundsystems auf nahezu
                allen Untergründen die komplette Lösung.
              </p>
              <p>
                Natürlich übernehmen wir auch gerne die harmonische farbliche
                Gestaltung Ihrer Innenräume. Wir kümmern uns darum, dass aus
                Ihren vier Wänden ein behagliches Zuhause wird.
              </p>
            </div>
          </div>
          <div
            className="text-center mt-60 md-mt-50"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h3 className="font-rubik pb-30">
              Haben Sie Fragen? Kontaktieren Sie uns gern.
            </h3>
            <Link className="theme-btn-five" href="#kontakt">
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      {/* 
     =============================================
			Call To Action
		============================================== */}
      <div className="fancy-short-banner-five pt-150 pb-150 md-pt-100 md-pb-100 ">
        <div className="container">
          <Kontakt2 />
        </div>
      </div>

      {/* 
     =============================================
			Footer Four
		============================================== */}
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <FooterLange />
          </div>
        </div>
      </footer>
    </div>
  );
}
