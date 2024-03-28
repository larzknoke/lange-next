import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "maler3_blue",
    meta: "Beraten",
    subTitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.`,
  },
  {
    icon: "maler2",
    meta: "Planen",
    subTitle: `At vero eos et accusam et justo duo dolores et ea rebum.`,
  },
  {
    icon: "ils_17",
    meta: "Ausführen",
    subTitle: `At vero eos et accusam et justo duo dolores et ea rebum.`,
  },
];

const FeatureLange2 = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <Image
                width={240}
                height={230}
                style={{ objectFit: "contain" }}
                src={`/images/lange/shape/${val.icon}.svg`}
                alt="icon"
              />
            </div>
            <div className="title font-slab">{val.meta}</div>
            <p className="font-rubik text-light">{val.subTitle}</p>
          </div>
          {/* /.block-style-fourteen */}
        </div>
      ))}
    </div>
    // /.row
  );
};

export default FeatureLange2;
