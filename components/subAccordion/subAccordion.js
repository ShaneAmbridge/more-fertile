import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./subAccordion.module.scss";
const SubAccordion = ({ subcategory }) => {
  const [active, setActive] = useState(false);
  return (
    <li>
      <span className={styles.subDropdownCategory}>
        <Link href={`/categories${subcategory?.uri}`} passHref>
          <a>
            <span className={styles.subSmCategory}>{subcategory.name}</span>
          </a>
        </Link>

        {subcategory?.posts.nodes.length > 0 && (
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
      </span>

      {active && (
        <ul className={`${styles.subCategoryAccordion}`}>
          <div className={styles.categoryAnimation}>
            {subcategory?.posts?.nodes.map((smCategory, k) => {
              return (
                <Link
                  key={k + "dfasdf"}
                  href={`${subcategory.uri}/${smCategory.slug}`}
                >
                  <a>
                    <span className={styles.subAccordion}>
                      {smCategory.title}
                    </span>
                  </a>
                </Link>
              );
            })}
          </div>
        </ul>
      )}
    </li>
  );
};

export default SubAccordion;
