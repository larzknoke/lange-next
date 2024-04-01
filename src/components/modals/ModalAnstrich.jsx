import React from "react";
import Modal from "react-responsive-modal";
import Image from "next/image";
import "react-responsive-modal/styles.css";

function ModalAnstrich({ anstrichIsOpen, toggleAnstrich }) {
  return (
    <Modal
      open={anstrichIsOpen}
      onClose={toggleAnstrich}
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
              style={{ objectFit: "contain" }}
              src={`/images/lange/icons/rolle_white.svg`}
              alt="icon"
            />
          </div>
          <div className="title font-slab">Anstrichsystem</div>
          <p>
            Schönheit und effektiver Schutz – das richtige Anstrichsystem sorgt
            für den Erhalt von Bausubstanz und verschönert gleichzeitig die
            Fassade. Das Angebot reicht von Mineral- und Silikatfarbe über
            Silikonharz- und Acrylatfarbe bis zu verschiedenen Strukturputzen.
          </p>
          <p>
            Bei der Auswahl des passenden Materials für den entsprechenden
            Untergrund sind wir Ihnen gern behilflich.
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
            src={`/images/lange/webp/haus1.webp`}
            alt="picture"
          />
        </div>
      </div>
    </Modal>
  );
}

export default ModalAnstrich;
