import React, { useState, useEffect } from "react";

import Link from "next/link";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import Image from "next/image";

const HeaderLange = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 68) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-four bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-four bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between pe-4">
          <div className="header-kontakt-top">
            <div className="d-flex gap-2">
              <img
                width={23}
                src="/images/lange/icons/eimer.svg"
                alt="Phone Icon"
              />
              <span>05284 - 94420</span>
            </div>
            <div className="d-flex gap-2">
              <img
                width={25}
                src="/images/lange/icons/pinsel3.svg"
                alt="Email Icon"
              />
              <span>
                <a href="mailto:info@lange-malermeister.de">
                  info@lange-malermeister.de
                </a>
              </span>
            </div>
          </div>
          <div className="logo w-25">
            <Link href="/">
              <Image
                width="480"
                height="200"
                src="/images/lange/lange_logo.svg"
                alt="brand"
              />
            </Link>
          </div>
          {/* End Logo */}
          <div className="d-flex  flex-lg-column flex-column-reverse  align-items-end  gap-3">
            <div className="header-kontakt d-flex flex-column flex-md-row gap-0 gap-md-4 align-items-end">
              <div className="d-flex gap-2">
                <img
                  width={23}
                  src="/images/lange/icons/eimer.svg"
                  alt="Phone Icon"
                />
                <span>05284 - 94420</span>
              </div>
              <div className="d-flex gap-2">
                <img
                  width={25}
                  src="/images/lange/icons/pinsel3.svg"
                  alt="Email Icon"
                />
                <span>
                  <a href="mailto:info@lange-malermeister.de">
                    info@lange-malermeister.de
                  </a>
                </span>
              </div>
            </div>
            <div className="burger d-lg-none d-flex font-slab gap-2 ">
              <img
                width={50}
                src="/images/lange/menu/menu_eimer.svg"
                alt="Menü Eimer"
                onClick={() => setMobileNavbar(!mobileNavbar)}
              />
            </div>
            <div className={`mobile-nav ${mobileNavbar ? " open" : ""}`}>
              <div className="mobile-nav-wrapper">
                <Link href="/">
                  <Image
                    className="logo-mobile"
                    width="400"
                    height="150"
                    src="/images/lange/lange_logo.svg"
                    alt="brand"
                  />
                </Link>
                <ul className="font-slab">
                  <li>
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#leistungen"
                      data-to-scrollspy-id="leistungen"
                      onClick={() => setMobileNavbar(!mobileNavbar)}
                      // data-toggle="dropdown"
                    >
                      Leistungen
                    </a>
                    <ul className="mobile-sub-nav">
                      <li>
                        <a
                          href="#anstrichsysteme"
                          data-to-scrollspy-id="anstrichsysteme"
                          onClick={() => setMobileNavbar(!mobileNavbar)}
                          // data-toggle="dropdown"
                        >
                          Anstrichsystem
                        </a>
                      </li>
                      <li>
                        <a
                          href="#daemmtechnik"
                          data-to-scrollspy-id="daemmtechnik"
                          onClick={() => setMobileNavbar(!mobileNavbar)}
                          // data-toggle="dropdown"
                        >
                          Dämmtechnik
                        </a>
                      </li>
                      <li>
                        <a
                          href="#gestaltung"
                          data-to-scrollspy-id="gestaltung"
                          onClick={() => setMobileNavbar(!mobileNavbar)}
                          // data-toggle="dropdown"
                        >
                          Innenraumgestaltung
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#laden"
                      data-to-scrollspy-id="laden"
                      onClick={() => setMobileNavbar(!mobileNavbar)}
                      // data-toggle="dropdown"
                    >
                      Fachgeschäft
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#team"
                      data-to-scrollspy-id="team"
                      onClick={() => setMobileNavbar(!mobileNavbar)}
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#referenzen"
                      data-to-scrollspy-id="referenzen"
                      onClick={() => setMobileNavbar(!mobileNavbar)}
                    >
                      Referenzen
                    </a>
                  </li>
                </ul>
                <Link
                  href="#kontakt"
                  className="theme-btn-five"
                  onClick={() => setMobileNavbar(!mobileNavbar)}
                >
                  Kontakt
                </Link>
              </div>
            </div>
            <nav
              id="mega-menu-holder"
              className="navbar navbar-expand-lg d-none d-lg-block"
            >
              <div className="container nav-container">
                <div
                  className="navbar-collapse collapse"
                  id="navbarSupportedContent"
                >
                  <div className="d-lg-flex align-items-center">
                    <MegaMenu />
                    {/* End MegaMenu */}

                    <ul className="right-button-group d-flex align-items-center justify-content-center">
                      <li>
                        <Link href="#kontakt" className="theme-btn-five">
                          Kontakt
                        </Link>
                      </li>
                    </ul>
                    {/* End right-button-group  */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* End nav */}
        </div>

        {/* <MegaMenuMobile /> */}

        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default HeaderLange;
