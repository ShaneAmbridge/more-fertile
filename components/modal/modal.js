import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./modal.module.scss";
import Image from "next/image";
import MaleFemaleContent from "./maleFemaleContent/maleFemaleContent";
import DateContent from "./dateContent/dateContent";

const Modal = ({ showmodal, setShowModal }) => {
  const modalRef = useRef();
  const [page, setPage] = useState(0);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showmodal) {
        setShowModal(false);
        // console.log("I pressed");
      }
    },
    [setShowModal, showmodal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const DisplayModalContent = () => {
    if (page === 1) {
      return <MaleFemaleContent setShowModal={setShowModal} />;
    } else {
      return <DateContent setShowModal={setShowModal} />;
    }
  };

  return (
    <>
      {showmodal ? (
        <div className={styles.modal} onClick={closeModal} ref={modalRef}>
          <div className={styles.animate}>
            {/* </animated.div> */}
            {DisplayModalContent()}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
