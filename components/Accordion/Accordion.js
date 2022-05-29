import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Accordion.module.scss";
import SubAccordion from "../subAccordion/subAccordion";
const Accordion = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <li>
      <span className={styles.category}>
        <Link href={`/categories${item?.uri}`} passHref>
          <a>{item.name}</a>
        </Link>

        <>
          {item?.children.nodes.length > 0 && (
            <>
              {active ? (
                <span
                  className={active ? styles.animationPlus : styles.plus}
                  onClick={() => setActive(false)}
                >
                  <Image
                    src="/images/minus-line.svg"
                    width={12}
                    height={12}
                    alt="plus"
                  />
                </span>
              ) : (
                <span className={styles.minus} onClick={() => setActive(true)}>
                  <Image
                    src="/images/plus-line.svg"
                    width={12}
                    height={12}
                    alt="plus"
                  />
                </span>
              )}
            </>
          )}
        </>
      </span>

      {active && (
        <ul className={`${styles.superSubCategory}`}>
          <div className={styles.categoryAnimation}>
            {item?.children?.nodes.map((subcategory, k) => {
              return (
                <SubAccordion key={k + "sdfsdf"} subcategory={subcategory} />
              );
            })}
          </div>
        </ul>
      )}
    </li>
  );
};

export default Accordion;
