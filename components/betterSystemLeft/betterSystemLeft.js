import React from "react";
import Services from "./services/services";
import styles from "./better-system-left.module.scss";
import FemaleServices from "./services/femaleServices";
const BetterSystemLeft = ({ male, female, data }) => {
  return (
    <div id="male" className={styles.main}>
      <div id="female" className={styles.container}>
        <div className={styles.titleAndAction}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              Better <span>System.</span> Better{" "}
              <span style={{ color: "#563CA5" }}>Balance.</span>
            </h2>

            <h2 className={styles.title}>
              Better <span>Health.</span>
            </h2>
          </div>
          <div className={styles.description}>
            Systems biology uses algorithms to measure body system balance in a
            holistic “real-life” forecast. We measure six Systems key to
            fertility health.​
          </div>
          <div>
            {male && <Services data={data} />}
            {female && <FemaleServices data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterSystemLeft;
