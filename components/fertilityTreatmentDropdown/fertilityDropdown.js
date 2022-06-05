import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./fertilityDropdown.module.scss";
const FertilityDropdown = ({ treedata, indextNo }) => {
  const [setActive, setActiveState] = useState(false);

  const [openTooltip, setOpenTooltip] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = (indextNo) => {
    if (indextNo === openTooltip) {
      setOpenTooltip(false);
    } else {
      setOpenTooltip(indextNo);
    }
  };

  const toggleTooltip = (i) => {
    if (i === open) {
      setOpen(false);
    } else {
      setOpen(i);
    }
  };
  return (
    <li>
      <span className={`${styles.titleContainer}`}>
        <span className={`${styles.levelFour}`}>
          <Link href={treedata.url} passHref>
            <a>
              <h4>{treedata.title}</h4>
            </a>
          </Link>

          {treedata.tooltip && treedata.tooltip.length > 0 && (
            <div
              onClick={() => toggle(indextNo + "dfdfdf")}
              className={styles.tooltip}
            >
              <Image
                src="/images/query-icon.svg"
                width={15}
                height={15}
                alt={treedata.tooltip}
              />
            </div>
          )}

          {openTooltip === indextNo + "dfdfdf" && (
            <div
              className={styles.tooltipText}
              data-tooltip={treedata.tooltip}
            ></div>
          )}
        </span>
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
                      <span
                        className={`${styles.levelFive} ${styles.rectangle}`}
                      >
                        <Link href={fifthCategory.url}>
                          <a>
                            <h4 title={fifthCategory.tooltip}>
                              {fifthCategory.title}
                            </h4>
                          </a>
                        </Link>

                        {fifthCategory.tooltip &&
                          fifthCategory.tooltip.length > 0 && (
                            <div
                              onClick={() =>
                                toggleTooltip(x.toString() + "dfdfdf")
                              }
                              className={styles.tooltip}
                            >
                              <Image
                                src="/images/query-icon.svg"
                                width={15}
                                height={15}
                                alt={fifthCategory.tooltip}
                              />
                            </div>
                          )}
                        {open === x.toString() + "dfdfdf" && (
                          <div
                            className={styles.tooltipText}
                            data-tooltip={fifthCategory.tooltip}
                          ></div>
                        )}
                      </span>
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

export default FertilityDropdown;
