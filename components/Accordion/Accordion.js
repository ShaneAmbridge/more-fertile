import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Accordion.module.scss";
import SubAccordion from "../subAccordion/subAccordion";
import { useRouter } from "next/router";
const Accordion = ({ item }) => {
  const router = useRouter();

  const [activeLink, setActiveLink] = useState("");

  const [open, setOpen] = useState();
  const [level3, setLevel3] = useState();
  const [first, setFirst] = useState(true);

  const linkPath = router.asPath.split("/");

  useEffect(() => {
    setActiveLink(linkPath[linkPath.length - 1]);
  }, [linkPath]);

  useEffect(() => {
    if (first) {
      if (linkPath[1] === "categories") {
        setLevel3(linkPath[5]);
      } else {
        setLevel3(linkPath[4]);
      }
    } else {
      if (open === undefined) {
        if (linkPath[1] === "categories") {
          setLevel3(linkPath[5]);
        } else {
          setLevel3(linkPath[4]);
        }
      } else {
        if (level3) {
          setLevel3();
        }
      }
    }
  }, [linkPath, open, level3, first]);

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

  // const toogle = (index) => {
  //   if (open) {
  //     setOpen(false);
  //   } else {
  //     setOpen(index);
  //   }
  // };

  return (
    <div className={styles.superCategoryWrapper}>
      <ul className={`${styles.superSubCategory}`}>
        {item?.posts?.nodes && (
          <div>
            {item?.posts?.nodes.map((post, j) => {
              return (
                <Link key={j + "dfasdf"} href={`${item?.uri}${post.slug}`}>
                  <a>
                    <span
                      className={`${styles.subPost} ${
                        activeLink === post.slug ? styles.activeClass : ""
                      }`}
                    >
                      {post.title}
                    </span>
                  </a>
                </Link>
              );
            })}
          </div>
        )}
        {item?.children?.nodes.map((subcategory, k) => {
          return (
            <li key={k + "sadfsdf"}>
              <span
                className={`${styles.subDropdownCategory} ${
                  activeLink === subcategory.slug ? styles.activeClass : ""
                }`}
              >
                <Link href={`/categories${subcategory?.uri}`} passHref>
                  <a>{subcategory.name}</a>
                </Link>

                {(subcategory.children.nodes.length > 0 ||
                  subcategory?.posts.nodes.length > 0) && (
                  <>
                    {level3 === subcategory.slug || open === k ? (
                      <span
                        style={{ marginBottom: "0px" }}
                        className={open ? styles.animationPlus : styles.plus}
                        onClick={() => toogle(k)}
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
                        onClick={() => toogle(k)}
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
              </span>
              {level3 === subcategory.slug || open === k ? (
                <SubAccordion subcategory={subcategory} />
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
