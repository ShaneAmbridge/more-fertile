import React from "react";
import styles from "./better-stystem-sidebar.module.scss";
import Link from "next/link";
// import { systemData, systemDataFemale } from "./systemdata";

const BetterSystemSidebar = ({ categories }) => {
  console.log(categories, "categories");
  return (
    <div id="female" className={styles.sidebar}>
      <h4>Systems Biology</h4>
      <aside>
        <ul className={styles.sidebarContent}>
          {categories.nodes[0].children.nodes.map((category, index) => (
            <li key={index} className={styles.mainCategory}>
              <Link href={`/categories${category.uri}`}>
                <a>
                  <span className={`${styles.categories}`}>
                    {category.name}
                  </span>
                </a>
              </Link>

              <ul className={styles.subCategory}>
                {category.posts.nodes.map((post, j) => {
                  return (
                    <li key={j + "sfdf"}>
                      <span className={`${styles.subDropdownCategory}`}>
                        <Link href={`${category?.uri}${post.slug}`} passHref>
                          <a>
                            <span className={styles.subSmCategory}>
                              {post.title}
                            </span>
                          </a>
                        </Link>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
          {/* <li className={styles.mainCategory}>
            <Link href="/home">
              <a>
                <span className={`${styles.categories}`}>Female</span>
              </a>
            </Link>

            <ul className={styles.subCategory}>
              {systemDataFemale.map((item, j) => {
                return (
                  <li key={j + "sfdf"}>
                    <span className={`${styles.subDropdownCategory}`}>
                      <Link href={`/categories${item?.link}`} passHref>
                        <a>
                          <span className={styles.subSmCategory}>
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    </span>
                  </li>
                );
              })}
            </ul>
          </li> */}
        </ul>
      </aside>
    </div>
  );
};

export default BetterSystemSidebar;
