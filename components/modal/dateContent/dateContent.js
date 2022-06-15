import Image from "next/image";
import React, { useRef } from "react";
import styles from "./date-content.module.scss";
const DateContent = ({
  setShowModal,
  page,
  setPage,
  setFormdata,
  formdata,
}) => {
  const { months, gender } = formdata;

  const inputRef = useRef();
  const handleClick = () => {
    if (inputRef.current) {
      setFormdata({ ...formdata, months: "1-6 months" });
    }
  };
  const handleActive = () => {
    if (inputRef.current) {
      setFormdata({ ...formdata, months: "6-12 months" });
    }
  };
  const handleDate = () => {
    if (inputRef.current) {
      setFormdata({ ...formdata, months: "12-24 months" });
    }
  };
  const handleYear = () => {
    if (inputRef.current) {
      setFormdata({ ...formdata, months: "24+ months" });
    }
  };

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
              <label className={styles.male__input} htmlFor="1-6 months">
                1-6 months
              </label>

              <input
                name="choose"
                type="radio"
                id="1-6 months"
                value="1-6 months"
                className={styles.input}
                checked={months === "1-6 months"}
                onChange={(e) =>
                  setFormdata({ ...formdata, months: e.target.value })
                }
              />
            </div>
            <div className={styles.female}>
              <label className={styles.female__input} htmlFor="6-12 months">
                6-12 months
              </label>

              <input
                type="radio"
                name="choose"
                id="6-12 months"
                value="6-12 months"
                className={styles.input}
                checked={months === "6-12 months"}
                onChange={(e) =>
                  setFormdata({ ...formdata, months: e.target.value })
                }
              />
            </div>
            <div className={styles.date}>
              <label className={styles.date__input} htmlFor="12-24 months">
                12-24 months
              </label>

              <input
                id="12-24 months"
                type="radio"
                name="choose"
                value="12-24 months"
                className={styles.input}
                checked={months === "12-24 months"}
                onChange={(e) =>
                  setFormdata({ ...formdata, months: e.target.value })
                }
              />
            </div>
            <div className={styles.year}>
              <label className={styles.year__input} htmlFor="24+ months">
                24+ months
              </label>

              <input
                id="24+ months"
                type="radio"
                name="choose"
                value="24+ months"
                className={styles.input}
                checked={months === "24+ months"}
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
