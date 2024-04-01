import React from "react";
import Modal from "react-responsive-modal";
import Image from "next/image";
import "react-responsive-modal/styles.css";

function ModalDammtechnik({ dammIsOpen, toggleDamm }) {
  return (
    <Modal
      open={dammIsOpen}
      onClose={toggleDamm}
      center
      classNames={{
        modal: "lange-modal",
      }}
    >
      <div className="lange-modal-content ">
        <div>
          <div className="icon">
            <Image
              width={78}
              height={78}
              style={{ objectFit: "contain", opacity: 0.7 }}
              src={`/images/lange/icons/waerme_white.svg`}
              alt="icon"
            />
          </div>
          <div className="title font-slab">Wärmedämmtechniken</div>
          <p>
            Eine professionell gedämmte Fassade ist die Basis zur Senkung Ihrer
            Energiekosten. Modernste Dämmstoffe, die sich auf fast allen
            vorhandenen Untergründen aufbringen lassen, sorgen dabei für Ihr
            Wohlfühlklima.
          </p>
          <p>
            Bei der Berechnung der Wärmedämmung, Materialauswahl und Technik
            unterstützen wir Sie gern!
          </p>
          <p>
            Weitere Informationen erhalten Sie auf{" "}
            <a href="http://www.vz-nrw.de/energieausweis">
              www.vz-nrw.de/energieausweis.
            </a>
          </p>
        </div>
        <div>
          <Image
            // width={750}
            // height={350}
            fill={true}
            objectFit="cover"
            style={{ objectFit: "cover" }}
            className="rounded-1"
            src={`/images/lange/webp/daemmung2.webp`}
            alt="picture"
          />
        </div>
      </div>
    </Modal>
  );
}

export default ModalDammtechnik;
