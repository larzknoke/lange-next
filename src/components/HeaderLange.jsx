import React, { useState, useEffect } from "react";

import Link from "next/link";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import Image from "next/image";

const HeaderLange = () => {
  const [navbar, setNavbar] = useState(false);

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
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
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
          <div className="d-flex flex-column align-items-end gap-2">
            <div className="header-kontakt d-flex gap-4">
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
            <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
              <div className="container nav-container">
                <div
                  className="navbar-collapse collapse"
                  id="navbarSupportedContent"
                >
                  <div className="d-lg-flex align-items-center">
                    <MegaMenu />
                    {/* End MegaMenu */}

                    <ul className="right-button-group d-flex align-items-center justify-content-center">
                      {/* <li>
                      <Link href="/login" className="signIn-action">
                        Login
                      </Link>
                    </li> */}
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

        <MegaMenuMobile />

        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default HeaderLange;
