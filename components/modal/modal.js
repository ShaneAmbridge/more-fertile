import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./modal.module.scss";

import MaleFemaleContent from "./maleFemaleContent/maleFemaleContent";
import DateContent from "./dateContent/dateContent";

const Modal = ({ showmodal, setShowModal }) => {
  const modalRef = useRef();
  const [page, setPage] = useState(0);

  const [formdata, setFormdata] = useState({
    gender: "male",
    months: "1-6 months",
  });
  console.log(formdata);

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
    if (page === 0) {
      return (
        <MaleFemaleContent
          setFormdata={setFormdata}
          formdata={formdata}
          page={page}
          setPage={setPage}
          setShowModal={setShowModal}
        />
      );
    } else {
      return (
        <DateContent
          setFormdata={setFormdata}
          formdata={formdata}
          page={page}
          setPage={setPage}
          setShowModal={setShowModal}
        />
      );
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
