import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./super-sub-accordion.module.scss";

const SuperSubAccordion = ({ superSubCategory, parentUri }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  const linkPath = router.asPath.split("/");

  useEffect(() => {
    setActiveLink(linkPath[linkPath.length - 1]);
  }, [linkPath]);

  return (
    <>
      <ul className={styles.superCategoryAccordion}>
        {superSubCategory?.posts?.nodes.map((superSmcategory, k) => {
          return (
            <Link
              key={k + "dfasdfff33"}
              href={`${parentUri.uri}${superSmcategory.slug}`}
            >
              <a>
                <span
                  className={`${styles.superAccordion} ${
                    activeLink === superSmcategory.slug
                      ? styles.activeClass
                      : ""
                  }`}
                >
                  {superSmcategory.title}
                </span>
              </a>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default SuperSubAccordion;
