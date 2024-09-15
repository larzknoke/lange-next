import React, { useState } from "react";
import Link from "next/link";

import HeaderLange from "@/components/HeaderLange";
import FooterLange from "@/components/FooterLange";
import Scroller from "@/components/Scroller";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Lange Malermeister || Marienmünster",
  description: "Lange Malermeister || Marienmünster",
};

export default function Home() {
  const [anstrichIsOpen, setAnstrichIsOpen] = useState(false);
  const [dammIsOpen, setDammIsOpen] = useState(false);

  function toggleAnstrich() {
    setAnstrichIsOpen(!anstrichIsOpen);
  }
  function toggleDamm() {
    setDammIsOpen(!dammIsOpen);
  }

  return (
    <div className="main-page-wrapper p0">
      <HeaderLange toggleAnstrich={toggleAnstrich} />
      <Scroller />

      <div className="container">
        <div className="impressum ">
          <h3>Impressum</h3>
          <h4>Angaben gemäß § 5 TMG:</h4>
          <p>Jörg Lange GmbH &amp; Co. KG</p>
          <p>
            Vor dem Riepenberg 10
            <br />
            37696 Marienmünster
          </p>
          <p>
            Tel. 05284 – 94420
            <br />
            Fax 05284 – 94421
            <br />
            E-Mail:{" "}
            <a href="mailto:info@lange-malermeister.de">
              info@lange-malermeister.de
            </a>
          </p>
          <p>Verantwortlich für den Inhalt dieser Website: Jörg Lange</p>
          <p>
            Komplementär: Firma Josef Lange Verwaltungs GmbH
            <br />
            Kommanditisten: Josef und Jörg Lange
            <br />
            Erfüllungsort: Marienmünster
            <br />
            Gerichtsstand: Höxter
          </p>
          <p>
            HR-Nr.: Josef Lange GmbH &amp; Co. KG HRA 516
            <br />
            HR-Nr.: Josef Lange Verwaltungs GmbH HRB 491
          </p>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            UMSATZSTEUER-ID: DE270273640
          </p>
          <h4>Verbraucherstreitschlichtung</h4>
          <p>
            Die EU-Kommission stellt im Internet unter folgendem Link eine
            Plattform zur Online-Streitbeilegung bereit:&nbsp;
            <a href="http://ec.europa.eu/consumers/odr">
              http://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>
            Diese Plattform dient als Anlaufstelle zur außergerichtlichen
            Beilegung von Streitigkeiten aus Online-Kauf- oder
            Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist.
            Der Anbieter ist weder bereit noch verpflichtet an einem
            Verbraucherstreitschlichtungsverfahren nach dem VSBG teilzunehmen.
          </p>
          <p>
            Unsere E-Mail-Adresse lautet:&nbsp;
            <a href="mailto:info@lange-malermeister.de">
              info@lange-malermeister.de
            </a>
          </p>
        </div>
      </div>
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <FooterLange />
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
