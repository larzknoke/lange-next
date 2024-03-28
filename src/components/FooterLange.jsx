import React from "react";
import Link from "next/link";
import Image from "next/image";

const linksFooterContent = [
  {
    itemName: "Home",
    routePath: "/",
  },
  {
    itemName: "Dämmtechnik",
    routePath: "#daemmtechnik",
  },
  {
    itemName: "Innenraumgestaltung",
    routePath: "#innenraumgestaltung",
  },
  {
    itemName: "Anstrichsystem",
    routePath: "#anstrichsystem",
  },
  {
    itemName: "Fachgeschäft",
    routePath: "#fachgeschäft",
  },
  {
    itemName: "Referenzen",
    routePath: "#referenzen",
  },
  {
    itemName: "Team",
    routePath: "#team",
  },
];

const legalFooterContent = [
  {
    itemName: "Datenschutzerklärung",
    routePath: "#datenschutzerklärung",
  },
  {
    itemName: "Impressum",
    routePath: "#impressum",
  },
];

const productsFooterContent = [
  {
    itemName: "Take the tour",
    routePath: "/product-customer-support",
  },
  {
    itemName: "Team",
    routePath: "/team-5",
  },
  {
    itemName: "Self Service",
    routePath: "/features-customer-support",
  },
  {
    itemName: "News",
    routePath: "/blog-v3",
  },
  {
    itemName: "About us",
    routePath: "/about-doc",
  },
  {
    itemName: "Contact",
    routePath: "/contact-cs",
  },
];

const FooterLange = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <Link href="/">
            <Image
              width={200}
              height={80}
              src="/images/logo/lange_logo.svg"
              alt="brand"
            />
          </Link>
        </div>
        <p className="mt-4 text-black font-rubik">
          <strong>Jörg Lange GmbH & Co. KG</strong> <br />
          Vor dem Riepenberg 10 <br />
          37696 Marienmünster <br />
        </p>
        <p className="mt-3 text-black font-rubik">
          Tel. 05284 - 94420 <br />
          Fax 05284 - 94421
        </p>
        <p className="mt-2 text-black font-rubik">
          <Link href={"mailto:info@lange-malermeister.de"}>
            info@lange-malermeister.de
          </Link>
        </p>
      </div>
      {/* /.footer-list */}

      <div className="col-lg-3 col-md-4 footer-list"></div>

      {/* /.footer-list */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Links</h5>
        <ul>
          {linksFooterContent.map((list, i) => (
            <li key={i}>
              <Link href={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Rechtliches</h5>
        <ul className="pe-5">
          {legalFooterContent.map((list, i) => (
            <li key={i}>
              <Link href={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
  );
};

export default FooterLange;
