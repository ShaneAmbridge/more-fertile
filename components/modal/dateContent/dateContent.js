import Image from "next/image";
import React from "react";
import styles from "./date-content.module.scss";
const DateContent = ({
  setShowModal,
  page,
  setPage,
  setFormdata,
  formdata,
}) => {
  const { months, gender } = formdata;
  console.log(gender, "date");
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
                  width: page === 0 ? "33.3%" : "66.6%",
                }}
              ></div>
            </div>
          </div>

          <div className={styles.gender}>
            <h4 className={styles.title}>
              {gender === "female"
                ? " How long have you been trying to get pregnant?"
                : "How long have you and your partner been trying to conceive?*"}
            </h4>

            <div className={styles.male}>
              <label htmlFor="oneToSix">1-6 months</label>

              <input
                type="radio"
                name="gender"
                value="1-6 months"
                className={styles.input}
                onChange={(e) =>
                  setFormdata({ ...formdata, months: e.target.value })
                }
              />
            </div>
            <div className={styles.female}>
              <label>6-12 months</label>

              <input
                type="radio"
                name="gender"
                value="6-12 months"
                className={styles.input}
                onChange={(e) =>
                  setFormdata({ ...formdata, months: e.target.value })
                }
              />
            </div>
            <div className={styles.date}>
              <label>12-24 months</label>

              <input
                type="radio"
                name="gender"
                value="12-24 months"
                className={styles.input}
                onChange={(e) =>
                  setFormdata({ ...formdata, months: e.target.value })
                }
              />
            </div>
            <div className={styles.year}>
              <label>24+ months</label>

              <input
                type="radio"
                name="gender"
                value="24+ months"
                className={styles.input}
                onChange={(e) =>
                  setFormdata({ ...formdata, months: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <button
            disabled={page === 1}
            onClick={() => setPage((currentPage) => currentPage + 1)}
            className={styles.next}
          >
            Next Question
          </button>
          <button
            onClick={() => setPage((currentPage) => currentPage - 1)}
            className={styles.back}
          >
            Back
          </button>
        </div>
      </div>
      <div className={styles.img__container}>
        {gender === "female" ? (
          <Image
            src="/modal/female.webp"
            layout="fill"
            className={styles.img}
            alt=""
          />
        ) : (
          <Image
            src="/modal/male.webp"
            layout="fill"
            className={styles.img}
            alt=""
          />
        )}

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

export default DateContent;
