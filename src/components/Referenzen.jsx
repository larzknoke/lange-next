import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Referenzen() {
  // const settings = {
  //   dots: false,
  //   arrow: true,
  //   infinite: true,
  //   speed: 900,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   margin: 30,
  // };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  const TestimonilContent = [
    {
      desc: `Einfamilienhaus in Höxter`,
      image: `ref1`,
    },
    {
      desc: `Einfamilienhaus in Steinheim`,
      image: `ref2`,
    },
    {
      desc: `Einfamilienhaus in Höxter`,
      image: `ref3`,
    },
    {
      desc: `Einfamilienhaus in Steinheim`,
      image: `ref4`,
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item rounded-1"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <Image
            width={900}
            height={300}
            style={{ objectFit: "contain" }}
            src={`/images/lange/referenzen/${val.image}.jpg`}
            alt="Referenzen"
            className="rounded-1 px-2"
          />
          <p className="fs-5">{val.desc}</p>
        </div>
      ))}
    </Slider>
  );
}
