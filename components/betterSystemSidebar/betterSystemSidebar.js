import React from "react";
import styles from "./better-stystem-sidebar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
// import { systemData, systemDataFemale } from "./systemdata";

const BetterSystemSidebar = ({ categories }) => {
  // console.log(categories, "categories  data");
  const router = useRouter();
  const path = router.asPath.split("/");
  const activeLink = path[path.length - 1];
  const femalePath = path[path.length - 2];
  // console.log(femalePath, "path");

  return (
    <div id="female" className={styles.sidebar}>
      <h4>Systems Biology</h4>
      <aside>
        <ul className={styles.sidebarContent}>
          {categories.nodes[0].children.nodes.map((category, index) => (
            <li key={index} className={styles.mainCategory}>
              <Link href={`/systems-biology/${category.slug}`}>
                <a>
                  <span
                    className={`${styles.categories} ${
                      activeLink === category.slug
                        ? styles.activeFemaleClass
                        : ""
                    }`}
                  >
                    {category.name}
                  </span>
                </a>
              </Link>

              <ul className={styles.subCategory}>
                {category.posts.nodes.map((post, j) => {
                  return (
                    <li key={j + "sfdf"}>
                      <span
                        className={`${styles.subDropdownCategory} ${
                          activeLink === post.slug ? styles.activeClass : ""
                        }  `}
                      >
                        <Link
                          href={`/systems-biology/${category.slug}/${post.slug}`}
                          passHref
                        >
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
