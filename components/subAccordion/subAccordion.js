import React from "react";
import Link from "next/link";
import styles from "./subAccordion.module.scss";
const SubAccordion = ({ subcategory }) => {
  console.log(subcategory, "sub category accordion");
  return (
    <li>
      <Link href={`/categories${subcategory?.uri}`} passHref>
        <a>
          <span className={styles.subSmCategory}>{subcategory.name}</span>
        </a>
      </Link>
    </li>
  );
};

export default SubAccordion;
