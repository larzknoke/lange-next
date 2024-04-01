import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";
import MenuLinkTwo from "./MenuLinkTwo";

const Leistungen = [
  {
    name: "Anstrichsysteme",
    routerPath: "#",
  },
  {
    name: "Dämmtechnik",
    routerPath: "#",
  },
  {
    name: "Innenraumgestaltung",
    routerPath: "#innenraumgestaltung",
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
