import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./categorySidebar.module.scss";
import Image from "next/image";
import Accordion from "../../Accordion/Accordion";

const CategorySidebar = ({ categories }) => {
  // console.log(categories);

  const [show, setShow] = useState(false);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  console.log(setActive, setHeight, setRotate);

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className={styles.sidebar}>
      <aside>
        <h4>All Categories</h4>

        <ul>
          {categories?.nodes?.map((category, i) => {
            return (
              <li key={i} className={styles.mainCategory}>
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
                      <>
                        {category && (
                          <Accordion key={j + "sadfsadf"} item={item} />
                        )}
                      </>
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
