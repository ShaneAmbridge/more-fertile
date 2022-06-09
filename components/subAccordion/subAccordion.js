import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./subAccordion.module.scss";
import { useRouter } from "next/router";
const SubAccordion = ({ subcategory }) => {
  console.log(subcategory, "subcategory");
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  const linkPath = router.asPath.split("/");

  useEffect(() => {
    setActiveLink(linkPath[linkPath.length - 1]);
  }, [linkPath]);

  return (
    <>
      <ul className={`${styles.subCategoryAccordion}`}>
        {subcategory?.posts?.nodes.map((smCategory, k) => {
          return (
            <Link
              key={k + "dfasdf"}
              href={`${subcategory.uri}${smCategory.slug}`}
            >
              <a>
                <span
                  className={`${styles.subAccordion} ${
                    activeLink === smCategory.slug ? styles.activeClass : ""
                  }`}
                >
                  {smCategory.title}
                </span>
              </a>
            </Link>
          );
        })}
      </ul>

      <ul className={`${styles.subCategoryAccordion}`}>
        {subcategory?.children?.nodes.map((smCategory, k) => {
          console.log(smCategory, "smCategory");
          return (
            <Link
              key={k + "dfasdf"}
              href={`${subcategory.uri}${smCategory.slug}`}
            >
              <a>
                <span
                  className={`${styles.subAccordion} ${
                    activeLink === smCategory.slug ? styles.activeClass : ""
                  }`}
                >
                  {smCategory.name}dsfgdsg
                </span>
              </a>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default SubAccordion;
