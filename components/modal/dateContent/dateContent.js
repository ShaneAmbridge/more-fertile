import Image from "next/image";
import React from "react";
import styles from "./date-content.module.scss";
const DateContent = ({ setShowModal }) => {
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
            <h4 className={styles.title}>
              How long have you been trying to get pregnant?
            </h4>

            <div className={styles.male}>
              <span>1-6 months</span>

              <input className={styles.input} type="checkbox" />
            </div>
            <div className={styles.female}>
              <span>6-12 months</span>

              <input className={styles.input} type="checkbox" />
            </div>
            <div className={styles.date}>
              <span>12-24 months</span>

              <input className={styles.input} type="checkbox" />
            </div>
            <div className={styles.year}>
              <span>24+ months</span>

              <input className={styles.input} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <button className={styles.back}>Back</button>
          <button className={styles.next}>Next Question</button>
        </div>
      </div>
      <div className={styles.img__container}>
        <Image
          src="/modal/man.png"
          layout="fill"
          className={styles.img}
          alt=""
        />

        <div
          className={styles.close__modal}
          aria-label="Close modal"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <Image src="/modal/black-close.svg" width={20} height={20} alt="" />
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

export default DateContent;
