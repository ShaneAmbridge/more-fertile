import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./subAccordion.module.scss";
import { useRouter } from "next/router";
import SuperSubAccordion from "../superSubAccordion/superSubAccordion";
const SubAccordion = ({ subcategory }) => {
  // console.log(subcategory, "subcategory");
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState();
  const [level4, setLevel4] = useState();
  const [first, setFirst] = useState(true);

  const linkPath = router.asPath.split("/");

  useEffect(() => {
    setActiveLink(linkPath[linkPath.length - 1]);
  }, [linkPath]);

  useEffect(() => {
    if (first) {
      if (linkPath[1] === "categories") {
        setLevel4(linkPath[6]);
      } else {
        setLevel4(linkPath[5]);
      }
    } else {
      if (open === undefined) {
        if (linkPath[1] === "categories") {
          setLevel4(linkPath[6]);
        } else {
          setLevel4(linkPath[5]);
        }
      } else {
        if (level4) {
          setLevel4();
        }
      }
    }
  }, [linkPath, open, level4, first]);

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
    <>
      <ul className={`${styles.subCategoryAccordion}`}>
        {subcategory?.posts?.nodes.map((smCategory, index) => {
          return (
            <Link
              key={index + "dfasdffdsfe"}
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
          return (
            <>
              <span
                key={k + "dfasdfdsfgdg"}
                className={`${styles.subAccordion} ${
                  activeLink === smCategory.slug ? styles.activeClass : ""
                }`}
              >
                <Link href={`${subcategory.uri}${smCategory.slug}`}>
                  <a>{smCategory.name}asdfsdaf</a>
                </Link>

                {smCategory?.posts.nodes.length > 0 && (
                  <>
                    {level4 === smCategory.slug || open === k ? (
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
              {level4 === smCategory.slug || open === k ? (
                <SuperSubAccordion
                  parentUri={smCategory}
                  superSubCategory={smCategory}
                />
              ) : (
                ""
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default SubAccordion;
