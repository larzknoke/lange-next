"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";
import MenuLinkTwo from "./MenuLinkTwo";
const HomeDropdown = [
  {
    img: "home01",
    routerPath: "/",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Event Organizer",
  },
  {
    img: "home02",
    routerPath: "/doc-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Doc Landing",
  },
  {
    img: "home03",
    routerPath: "/project-management",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Project Management",
  },
  {
    img: "home04",
    routerPath: "/customer-support",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Customer Support",
  },
  {
    img: "home05",
    routerPath: "/product-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Product Landing",
  },
  {
    img: "home06",
    routerPath: "/product-landing-dark",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Product Landing Dark",
  },
  {
    img: "home07",
    routerPath: "/note-taking-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Not Taking Landing",
  },
  {
    img: "home08",
    routerPath: "/video-editor-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Video Editor Landing",
  },
  {
    img: "home10",
    routerPath: "/appointment-scheduling",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Appointment Scheduling",
  },
  {
    img: "home11",
    routerPath: "/mobile-app-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Mobile App Landing",
  },
  {
    img: "home12",
    routerPath: "/doc-signature",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Doc Signature",
  },
  {
    img: "home13",
    routerPath: "/website-builder",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Website Builder",
  },
  {
    img: "home14",
    routerPath: "/form-survey-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Form Survey",
  },
  {
    img: "home16",
    routerPath: "/vr-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "VR Landing",
  },
  {
    img: "home15",
    routerPath: "/e-commerce",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "E-commerce",
  },
  {
    img: "home09",
    routerPath: "/coming-soon",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Coming Soon",
  },
];

const Leistungen = [
  {
    name: "Dämmtechnik",
    routerPath: "#",
  },
  {
    name: "Innenraumgestaltung",
    routerPath: "#",
  },
  {
    name: "Anstrichsysteme",
    routerPath: "#",
  },
];
const AboutUs = [
  {
    name: "Customer Support",
    routerPath: "/about-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/about-eo",
  },
  {
    name: "Project Management",
    routerPath: "/about-pm",
  },
  {
    name: "Documentation",
    routerPath: "/about-doc",
  },
];

const ContactUS = [
  {
    name: "Customer Support",
    routerPath: "/contact-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/contact-eo",
  },
  {
    name: "Project Management",
    routerPath: "/contact-pm",
  },
  {
    name: "Documentation",
    routerPath: "/contact-doc",
  },
];
const Team = [
  {
    name: "Team Version 01",
    routerPath: "/team-1",
  },
  {
    name: "Team Version 02",
    routerPath: "/team-2",
  },
  {
    name: "Team Version 03",
    routerPath: "/team-3",
  },
  {
    name: "Team Version 04",
    routerPath: "/team-4",
  },
  {
    name: "Team Version 05",
    routerPath: "/team-5",
  },
  {
    name: "Team Version 06",
    routerPath: "/team-6",
  },
  {
    name: "Team Details",
    routerPath: "/teams/1",
  },
  {
    name: "Team Details Slider",
    routerPath: "/team-details-v2/1",
  },
];

const Services = [
  {
    name: "Service Version 01",
    routerPath: "/service-v1",
  },
  {
    name: "Service Version 02",
    routerPath: "/service-v2",
  },
  {
    name: "Service Version 03",
    routerPath: "/service-v3",
  },
  {
    name: "Service Version 04",
    routerPath: "/service-v4",
  },
  {
    name: "Service Details",
    routerPath: "/services/1",
  },
];
const Miscellaneous = [
  {
    name: "Terms & Condition",
    routerPath: "/terms-conditions",
  },
  {
    name: "Login",
    routerPath: "/login",
  },
  {
    name: "Signup",
    routerPath: "/signup",
  },
  {
    name: "404",
    routerPath: "/not-found",
  },
];
const Portfolio = [
  {
    name: "Classic Style",
    routerPath: "/classic-style",
  },
  {
    name: "Grid 2 Columns",
    routerPath: "/grid-two-col",
  },
  {
    name: "Grid 3 Columns",
    routerPath: "/grid-three-col",
  },
  {
    name: "Gallery Slider",
    routerPath: "/gallery-slider",
  },
  {
    name: "Grid Single",
    routerPath: "/grid-single",
  },
  {
    name: "Classic Details",
    routerPath: "/portfolios/3",
  },
];
const Blogs = [
  {
    name: "Blog Version 01",
    routerPath: "/blog-v1",
  },
  {
    name: "Blog Version 02",
    routerPath: "/blog-v2",
  },
  {
    name: "Blog Version 03",
    routerPath: "/blog-v3",
  },
  {
    name: "Blog Version 04",
    routerPath: "/blog-v4",
  },
  {
    name: "Blog Version 05",
    routerPath: "/blog-v5",
  },
  {
    name: "Blog Version 06",
    routerPath: "/blog-v6",
  },
  {
    name: "Blog Details",
    routerPath: "/blogs/1",
  },
];
const Docs = [
  {
    name: "Full Width",
    routerPath: "/doc-full-width",
  },
  {
    name: "Full Width Banner",
    routerPath: "/doc-full-width-banner",
  },
  {
    name: "Doc Box",
    routerPath: "/doc-box",
  },
  {
    name: "Doc Box With Banner",
    routerPath: "/doc-box-with-banner",
  },
  {
    name: "Changelog ***",
    routerPath: "/changelog",
  },
];

const MegaMenu = () => {
  const pathname = usePathname();
  const [currentTopRoute, setCurrentTopRoute] = useState("Home");
  return (
    <ul className="navbar-nav">
      <li
        className={
          currentTopRoute == "Home"
            ? "nav-item dropdown position-static active"
            : "nav-item dropdown position-static"
        }
      >
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      {/* End li */}

      <li
        className={
          currentTopRoute == "Portfolio"
            ? "nav-item active dropdown"
            : "nav-item dropdown"
        }
      >
        <a
          className={
            currentTopRoute == "Portfolio"
              ? "nav-link dropdown-toggle active"
              : "nav-link dropdown-toggle"
          }
          href="#"
          data-toggle="dropdown"
        >
          Leistungen
        </a>
        <ul className="dropdown-menu">
          {Leistungen.map((val, i) => (
            <MenuLink
              topMenu={"Portfolio"}
              val={val}
              key={i}
              setCurrentTopRoute={setCurrentTopRoute}
            />
          ))}
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li
        className={
          currentTopRoute == "Blogs"
            ? "nav-item active dropdown"
            : "nav-item dropdown"
        }
      >
        <a
          className={
            currentTopRoute == "laden" ? "nav-link  active" : "nav-link "
          }
          href="#laden"
          data-to-scrollspy-id="laden"
          // data-toggle="dropdown"
        >
          Fachgeschäft
        </a>
      </li>
      {/* End li */}
      <li
        className={
          currentTopRoute == "Blogs"
            ? "nav-item active dropdown"
            : "nav-item dropdown"
        }
      >
        <a
          className={
            currentTopRoute == "Blogs" ? "nav-link  active" : "nav-link "
          }
          href="#team"
          data-to-scrollspy-id="team"
        >
          Team
        </a>
      </li>
      {/* End li */}

      <li
        className={
          currentTopRoute == "Blogs"
            ? "nav-item active dropdown"
            : "nav-item dropdown"
        }
      >
        <a
          className={
            currentTopRoute == "Blogs" ? "nav-link  active" : "nav-link "
          }
          href="#referenzen"
          data-to-scrollspy-id="referenzen"
        >
          Referenzen
        </a>
      </li>
      {/* End li */}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
