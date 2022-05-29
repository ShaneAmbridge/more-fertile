import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./categorySidebar.module.scss";

import Accordion from "../../Accordion/Accordion";

const CategorySidebar = ({ categories }) => {
  // console.log(categories, "cateogres");
  return (
    <div className={styles.sidebar}>
      <aside>
        <h4>All Categories</h4>

        <ul>
          {categories?.nodes?.map((category, i) => {
            return (
              <li key={i + "sdfsdf"} className={styles.mainCategory}>
                <Link href={`/categories${category.uri}`} passHref>
                  <a>
                    <span className={styles.categories}>{category.name}</span>
                  </a>
                </Link>

                <ul
                  className={
                    category?.children?.nodes.length > 0
                      ? styles.subCategory
                      : ""
                  }
                >
                  {category?.children?.nodes.map((item, j) => {
                    return (
                      <div key={j + "sadfsadf"}>
                        {category && <Accordion item={item} />}
                      </div>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default CategorySidebar;
