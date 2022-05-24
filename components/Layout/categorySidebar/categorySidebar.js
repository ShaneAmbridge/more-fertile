import React from "react";
import Link from "next/link";
import styles from "./categorySidebar.module.scss";

const CategorySidebar = ({ categories }) => {
  console.log(categories);
  return (
    <div className={styles.sidebar}>
      <aside>
        <h4>All Categories</h4>

        <ul>
          {categories?.nodes?.map((category, i) => {
            return (
              <li key={i} className={styles.mainCategory}>
                <Link href={`/categories/${category.uri}`} passHref>
                  <span className={styles.categories}>{category.name}</span>
                </Link>
                <ul
                  className={
                    category?.children?.nodes.length > 0
                      ? styles.subCategory
                      : ""
                  }
                >
                  {category?.children?.nodes.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href={`/categories/${item.uri}`} passHref>
                          <span className={styles.category}>{item.name}</span>
                        </Link>

                        <ul
                          className={
                            item.children.nodes.length > 0
                              ? styles.superSubCategory
                              : ""
                          }
                        >
                          {item?.children.nodes.map((subcategory, i) => {
                            return (
                              <li key={i}>
                                <Link
                                  href={`/categories/${subcategory.uri}`}
                                  passHref
                                >
                                  <span className={styles.subSmCategory}>
                                    {subcategory.name}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
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
  );
};

export default CategorySidebar;
