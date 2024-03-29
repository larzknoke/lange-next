import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "rolle",
    meta: "Fassadengestaltung",
    subTitle: `Seit mehr als 70 Jahren helfen wir Ihnen und Ihrer Immobilie dabei, der Witterung zu trotzen.`,
    picture: "haus1",
  },
  {
    icon: "waerme",
    meta: "Wärmedämmtechniken",
    subTitle: `Darüber hinaus sorgen modernste Techniken für geringe Heizkosten.`,
    picture: "mann_hoch4",
  },
  {
    icon: "gestaltung",
    meta: "farbliche Gestaltung",
    subTitle: `Natürlich übernehmen wir auch gerne die harmonische farbliche Gestaltung Ihrer Innenräume. `,
    picture: "fassade3",
  },
];

const FeatureLange = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
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
