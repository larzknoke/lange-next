import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "rolle",
    meta: "Anstrichsysteme",
    subTitle: `Schönheit und effektiver Schutz – das richtige Anstrichsystem sorgt für den Erhalt von Bausubstanz.`,
    picture: "haus1",
    modal: "toggleAnstrich",
    link: "anstrichsysteme",
  },
  {
    icon: "waerme",
    meta: "Wärmedämmtechniken",
    subTitle: `Eine professionell gedämmte Fassade ist die Basis zur Senkung Ihrer Energiekosten.`,
    picture: "mann_hoch4",
    modal: "toggleDamm",
    link: "daemmtechnik",
  },
  {
    icon: "gestaltung",
    meta: "farbliche Gestaltung",
    subTitle: `Natürlich übernehmen wir auch gerne die harmonische farbliche Gestaltung Ihrer Innenräume. `,
    picture: "fassade3",
    link: "gestaltung",
  },
];

const FeatureLange = ({ toggleAnstrich, toggleDamm }) => {
  return (
    <div className="row justify-content-center gap-4 gap-md-0">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          onClick={eval(val.modal)}
          id={val.link}
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
            <div className="title">{val.meta}</div>
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
