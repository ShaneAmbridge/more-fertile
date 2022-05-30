import React, { useState } from "react";
import Link from "next/link";
import styles from "./treeDropdown.module.scss";
const TreeDropdown = ({ treedata }) => {
  const [setActive, setActiveState] = useState(false);
  return (
    <li>
      <span className={`${styles.titleContainer}`}>
        <Link title={treedata[0].title} href={treedata[0].link} passHref>
          <a>
            <h4 className={`${styles.levelFour}`}>{treedata[0].name}</h4>
          </a>
        </Link>
        <span
          className={styles.toggleBtn}
          onClick={() => setActiveState(!setActive)}
        >
          {setActive ? <>-</> : <>{treedata[0].icon}</>}
        </span>
      </span>
      {setActive && (
        <ol className={styles.levelFiveWrapper}>
          {treedata[1].data.map((item, i) => {
            return (
              <li key={i + "sadf"}>
                <Link title={item.title} href={item.link}>
                  <a>
                    <h4 className={`${styles.levelFive} ${styles.rectangle}`}>
                      {item.name}
                    </h4>
                  </a>
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </li>
  );
};

export default TreeDropdown;
