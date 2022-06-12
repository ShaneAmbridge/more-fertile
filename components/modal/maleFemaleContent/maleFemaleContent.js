import Image from "next/image";
import React from "react";
import styles from "./male-female-content.module.scss";
const MaleFemaleContent = ({ setShowModal }) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/images/flower.png" width={54} height={32} alt="" />
            <h6>Morefertile</h6>
          </div>

          <div className={styles.main__progress}>
            <div className={styles.progressbar}>
              <div></div>
            </div>
          </div>

          <div className={styles.gender}>
            <h4 className={styles.title}>What is your Gender?</h4>

            <div className={styles.male}>
              <span>Male</span>

              <input className={styles.input} type="checkbox" />
            </div>
            <div className={styles.female}>
              <span>Female</span>

              <input className={styles.input} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <button>Next Question</button>
        </div>
      </div>
      <div className={styles.img__container}>
        <Image
          src="/modal/male.png"
          layout="fill"
          className={styles.img}
          alt=""
        />

        <div
          className={styles.close__modal}
          aria-label="Close modal"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <Image src="/modal/close.svg" width={20} height={20} alt="" />
        </div>
      </div>

      <div
        className={styles.close}
        aria-label="Close modal"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <Image src="/modal/modal-close.svg" width={18} height={18} alt="" />{" "}
      </div>
    </div>
  );
};

export default MaleFemaleContent;