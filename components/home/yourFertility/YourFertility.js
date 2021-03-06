import styles from "./yourFertility.module.scss";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
const YourFertility = ({ ww }) => {
  const imgRef = useRef();

  const [isImgVisible, setVisible] = useState(false);
  const [isObserving, setIsobserving] = useState(false);
  useEffect(() => {
    if (typeof imgRef.current === "object") {
      const observer = new IntersectionObserver((entries) => {
        if (ww < 800) {
          if (entries[0].isIntersecting) {
            setVisible(true);

            observer.unobserve(imgRef.current);
            setIsobserving(false);
          }
        } else {
          setVisible(true);
        }
      });

      observer.observe(imgRef.current);
      setIsobserving(true);
    }

    // return () => observer.unobserve(imgRef.current);
    return () => {
      if (typeof imgRef.current !== undefined)
        isObserving && observer.unobserve(imgRef.current);
    };
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div
            ref={imgRef}
            className={isImgVisible ? styles.imageToTop : styles.image}
          >
            <Image
              width="624px"
              height="404px"
              src="/images/new/moreFertility.png"
            />
          </div>
        </div>
        <div className={styles.titleAndAction}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              Your
              <span>Fertility.</span>
            </h2>
            <h2 className={styles.title}>
              Your <span style={{ color: "#357989" }}>Plan.</span>
            </h2>
            <h2 className={styles.title}>
              Your <span>way.</span>
            </h2>
          </div>
          <div className={styles.description}>
            Using Systems Biology technology we measures the balance of
            hormones, energy, immune state and fertility health.​
          </div>
          <button className={styles.button}>Find out more</button>
        </div>
      </div>
    </div>
  );
};

export default YourFertility;
