import Image from "next/image";
import React from "react";
import styles from "./male-female-content.module.scss";
const MaleFemaleContent = ({
  setShowModal,
  page,
  setPage,
  setFormdata,
  formdata,
}) => {
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
              <div
                style={{
                  width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
                }}
              ></div>
            </div>
          </div>

          <div className={styles.gender}>
            <h4 className={styles.title}>What is your Gender?</h4>

            <div className={styles.male}>
              <label className={styles.male__input} htmlFor="male">
                Male
              </label>
              <input
                name="choose"
                type="radio"
                value="male"
                id="male"
                className={styles.input}
                checked={formdata.gender === "male"}
                onChange={(e) =>
                  setFormdata({ ...formdata, gender: e.target.value })
                }
              />
            </div>
            <div className={styles.female}>
              <label className={styles.female__input} htmlFor="female">
                Female
              </label>
              <input
                name="choose"
                className={styles.input}
                id="female"
                type="radio"
                value="female"
                checked={formdata.gender === "female"}
                onChange={(e) =>
                  setFormdata({ ...formdata, gender: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <button
            disabled={formdata.gender.trim() === ""}
            onClick={() => setPage((currentPage) => currentPage + 1)}
          >
            Next Question
          </button>
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
