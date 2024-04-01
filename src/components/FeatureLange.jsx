import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "rolle",
    meta: "Anstrichsysteme",
    subTitle: `Schönheit und effektiver Schutz – das richtige Anstrichsystem sorgt für den Erhalt von Bausubstanz.`,
    picture: "haus1",
  },
  {
    icon: "waerme",
    meta: "Wärmedämmtechniken",
    subTitle: `Eine professionell gedämmte Fassade ist die Basis zur Senkung Ihrer Energiekosten.`,
    picture: "mann_hoch4",
  },
  {
    icon: "gestaltung",
    meta: "farbliche Gestaltung",
    subTitle: `Natürlich übernehmen wir auch gerne die harmonische farbliche Gestaltung Ihrer Innenräume. `,
    picture: "fassade3",
  },
];

const FeatureLange = ({ toggleAnstrich }) => {
  return (
    <div className="row justify-content-center">
      {/* <div className="d-flex gap-4 flex-column ">
        <p>
          Seit mehr als 70 Jahren helfen wir Ihnen und Ihrer Immobilie dabei,
          der Witterung zu trotzen. Ob Fachwerk oder Ziegel, ob Erstanstrich
          oder Renovierung: Wir sind die Spezialisten für ästhetische
          Fassadengestaltung und effektiven Langzeitschutz.
        </p>
        <p>
          Darüber hinaus sorgen modernste Wärmedämmtechniken für geringe
          Heizkosten. Wir bieten Ihnen von der Wärmeschutzberechnung bis zum
          fachgerechten Anbringen des Wärmeverbundsystems auf nahezu allen
          Untergründen die komplette Lösung.
        </p>
        <p>
          Natürlich übernehmen wir auch gerne die harmonische farbliche
          Gestaltung Ihrer Innenräume. Wir kümmern uns darum, dass aus Ihren
          vier Wänden ein behagliches Zuhause wird.
        </p>
      </div> */}
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          onClick={toggleAnstrich}
        >
          <div className="block-style-five">
            <div className="icon">
              <Image
                width={78}
                height={78}
                style={{ objectFit: "contain" }}
                src={`/images/lange/icons/${val.icon}.svg`}
                alt="icon"
              />
            </div>
            <div className="title font-slab">{val.meta}</div>
            <p>{val.subTitle}</p>
            <div className=" mt-3">
              <Image
                width={350}
                height={500}
                style={{ objectFit: "cover" }}
                className="rounded-1"
                src={`/images/lange/webp/${val.picture}.webp`}
                alt="picture"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureLange;
