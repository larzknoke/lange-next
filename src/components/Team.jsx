import Image from "next/image";
import React from "react";

const TeamContent = [
  {
    title: "Josef Lange",
    image: "lange_josef",
    packageName: "pc2",
    skewClass: "skew-right",
    priceList: [
      {
        list: "Malermeister",
        listClass: "",
      },
    ],
    animatinDelay: "0",
  },
  {
    title: "Jörg Lange",
    image: "lange_joerg",
    price: "0.32",
    priceMeta: "per user/month",
    packageName: "pc2",
    skewClass: "skew-left",
    priceList: [
      {
        list: "Malermeister",
        listClass: "",
      },
      {
        list: "Gebäudeenergieberater",
        listClass: "",
      },
      {
        list: "Betriebswirt des Handwerks",
        listClass: "",
      },
    ],
    animatinDelay: "100",
  },
  {
    title: "Christa Weber",
    image: "weber_christa",
    price: "0.65",
    priceMeta: "per user/month",
    packageName: "pc2",
    skewClass: "skew-right",
    priceList: [
      {
        list: "Kontakt",
        listClass: "",
      },
      {
        list: "Koordination",
        listClass: "",
      },
      {
        list: "Verkauf und Beratung",
        listClass: "",
      },
    ],
    animatinDelay: "200",
  },
  {
    title: "Marion Grote",
    image: "grote_marion",
    price: "0.65",
    priceMeta: "per user/month",
    packageName: "pc2",
    skewClass: "skew-left",
    priceList: [
      {
        list: "Rechnungswesen",
        listClass: "",
      },
      {
        list: "Verkauf und Beratung",
        listClass: "",
      },
    ],
    animatinDelay: "200",
  },
  // {
  //   title: "Alexander Rohde",
  //   image: "alexander_rohde",
  //   price: "0.65",
  //   priceMeta: "per user/month",
  //   packageName: "pc2",
  //   skewClass: "skew-right",
  //   priceList: [
  //     {
  //       list: "Projektleiter",
  //       listClass: "",
  //     },
  //   ],
  //   animatinDelay: "200",
  // },
];

const Team = () => {
  return (
    <div className="row justify-content-center">
      {TeamContent.map((item, i) => (
        <div
          className="col-lg-4 offset-lg-1 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animatinDelay}
        >
          <div className={`px-5 pr-table-wrapper ${item.skewClass}`}>
            <div className={`pack-name font-slab ${item.packageName}`}>
              <span>{item.title}</span>
            </div>
            <Image
              width="300"
              height="320"
              src={`/images/lange/team/${item.image}.jpg`}
              style={{ objectFit: "cover" }}
              alt="team"
              className="line rounded-1"
            />
            <Image
              width="321"
              height="4"
              src="/images/shape/114.svg"
              alt="shape"
              className="line"
            />
            <ul>
              {item.priceList.map((val, i) => (
                <li className={val.listClass} key={i}>
                  {val.list}
                </li>
              ))}
            </ul>
            <a href="#" className="subscribe-btn font-rubik">
              Kontakt
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
