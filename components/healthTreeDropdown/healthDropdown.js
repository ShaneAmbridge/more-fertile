import React, { useState } from "react";
import Link from "next/link";
import styles from "./healthDropdown.module.scss";
const HealthDropdown = ({ treedata }) => {
  const [setActive, setActiveState] = useState(false);
  console.log(treedata.fifthLevelElements.nodes, "ses");

  return (
    <li>
      <span className={`${styles.titleContainer}`}>
        <Link title={treedata.title} href={treedata.url} passHref>
          <a>
            <h4 className={`${styles.levelFour}`}>{treedata.title}</h4>
          </a>
        </Link>
        {treedata.fifthLevelElements.nodes !== null &&
          treedata.fifthLevelElements.nodes && (
            <span
              className={styles.toggleBtn}
              onClick={() => setActiveState(!setActive)}
            >
              {setActive ? <>-</> : <>+</>}
            </span>
          )}
      </span>
      {setActive && (
        <ol className={styles.levelFiveWrapper}>
          {treedata.fifthLevelElements.nodes !== null &&
            treedata.fifthLevelElements.nodes && (
              <>
                {treedata.fifthLevelElements.nodes.map((fifthCategory, x) => {
                  return (
                    <li key={x + "sadf"}>
                      <Link
                        title={fifthCategory.title}
                        href={fifthCategory.url}
                      >
                        <a>
                          <h4
                            className={`${styles.levelFive} ${styles.rectangle}`}
                          >
                            {fifthCategory.title}
                          </h4>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </>
            )}
        </ol>
      )}
    </li>
  );
};

export default HealthDropdown;
