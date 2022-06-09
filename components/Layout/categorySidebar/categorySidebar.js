import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./categorySidebar.module.scss";

import Accordion from "../../Accordion/Accordion";
import Image from "next/image";
import { useRouter } from "next/router";

const CategorySidebar = ({ categories }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  // const [activeId, setActiveId] = useState(null);
  const [open, setOpen] = useState();
  const [level2, setLevel2] = useState();
  const [first, setFirst] = useState(true);
  const linkPath = router.asPath.split("/");

  // const activeCategory = linkPath.includes;

  useEffect(() => {
    setActiveLink(linkPath[linkPath.length - 1]);
  }, [linkPath]);

  useEffect(() => {
    if (first) {
      if (linkPath[1] === "categories") {
        setLevel2(linkPath[4]);
      } else {
        setLevel2(linkPath[3]);
      }
    } else {
      if (open === undefined) {
        if (linkPath[1] === "categories") {
          setLevel2(linkPath[4]);
        } else {
          setLevel2(linkPath[3]);
        }
      } else {
        if (level2) {
          setLevel2();
        }
      }
    }
  }, [linkPath, open, level2, first]);

  // const toogle = (index) => {
  //   if (index === open) {
  //     setOpen(false);
  //   } else {
  //     setOpen(index);
  //   }
  // };
  const toogle = (index) => {
    if (first) {
      setOpen(false);
      setFirst(false);

      if (first) {
        setOpen(index);
      }
    } else {
      if (index === open) {
        setOpen(false);
      } else {
        setOpen(index);
      }
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <h4>All Categories</h4>
        <aside>
          <ul className={styles.sidebarContent}>
            {categories?.nodes?.map((category, i) => {
              return (
                <li key={i + "sdfsdf"} className={styles.mainCategory}>
                  <Link href={`/${category.slug}`} passHref>
                    <a>
                      <span
                        className={`${styles.categories} ${
                          activeLink === category.slug ? styles.activeClass : ""
                        }`}
                      >
                        {category.name}
                      </span>
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
                      // console.log(item, "item");
                      return (
                        <li key={j + "sfdf"}>
                          <span
                            className={`${styles.category} ${
                              activeLink === item.slug ? styles.activeClass : ""
                            }`}
                          >
                            <Link href={`/categories${item?.uri}`} passHref>
                              <a>{item.name}</a>
                            </Link>

                            <>
                              {(item.children.nodes.length > 0 ||
                                item.posts.nodes.length > 0) && (
                                <>
                                  {level2 === item.slug || open === j ? (
                                    <span
                                      style={{ marginBottom: "0px" }}
                                      className={
                                        open
                                          ? styles.animationPlus
                                          : styles.plus
                                      }
                                      onClick={() => toogle(j)}
                                    >
                                      <Image
                                        src="/images/minus-line.svg"
                                        width={12}
                                        height={12}
                                        alt="plus"
                                      />
                                    </span>
                                  ) : (
                                    <span
                                      style={{ marginBottom: "0px" }}
                                      className={styles.minus}
                                      onClick={() => toogle(j)}
                                    >
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

                          {level2 === item.slug || open === j ? (
                            <Accordion item={item} />
                          ) : (
                            ""
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default CategorySidebar;
