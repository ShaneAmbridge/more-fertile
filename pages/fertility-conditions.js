import React, { useState } from "react";
import LayoutMain from "../components/Layout/layout";
import Image from "next/image";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import styles from "../styles/fertility-conditions.module.scss";
import TreeDropdown from "../components/fertilityConditonDropdown/treeDropdown";

const FertilityConditons = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  const toggleTooltip = (i) => {
    if (i === open) {
      setOpen(false);
    } else {
      setOpen(i);
    }
  };
  const toggle = (j) => {
    console.log(j, openTooltip);
    if (j === openTooltip) {
      setOpenTooltip(false);
    } else {
      setOpenTooltip(j);
    }
  };

  return (
    <LayoutMain>
      <div className={styles.container}>
        <Link href={data.topCategoryBy.url}>
          <a>
            <h1 className={`${styles.levelOne} ${styles.rectangle}`}>
              {data.topCategoryBy.title}
            </h1>
          </a>
        </Link>
        <ol className={styles.levelTwoWrapper}>
          {data.topCategoryBy.secondLevelElements.nodes.map(
            (secondCategory, i) => {
              return (
                <li className={styles.componentWrapper} key={i + "ddfdf"}>
                  <span className={`${styles.levelTwo} ${styles.rectangle}`}>
                    <Link href={secondCategory.url}>
                      <a>
                        <h2>{secondCategory.title}</h2>
                      </a>
                    </Link>
                    {secondCategory.tooltip &&
                      secondCategory.tooltip.length > 0 && (
                        <div
                          onClick={() => toggleTooltip(i)}
                          className={styles.tooltip}
                        >
                          <Image
                            src="/images/query-icon.svg"
                            width={15}
                            height={15}
                            alt={secondCategory.tooltip}
                          />
                        </div>
                      )}

                    {open === i && (
                      <div
                        className={styles.tooltipText}
                        data-tooltip={secondCategory.tooltip}
                      ></div>
                    )}
                  </span>
                  <ol className={styles.levelThreeWrapper}>
                    {secondCategory.thirdLevelElements.nodes.map(
                      (thirdCategory, j) => {
                        return (
                          <li key={j + "dfdfdf"}>
                            <span
                              className={`${styles.levelThree} ${styles.rectangle}`}
                            >
                              <Link href={thirdCategory.url}>
                                <a>
                                  <h3 title={thirdCategory.tooltip}>
                                    {thirdCategory.title}
                                  </h3>
                                </a>
                              </Link>

                              {thirdCategory.tooltip &&
                                thirdCategory.tooltip.length > 0 && (
                                  <div
                                    onClick={() =>
                                      toggle(
                                        j.toString() + i.toString() + "dfdfdf"
                                      )
                                    }
                                    className={styles.tooltip}
                                  >
                                    <Image
                                      src="/images/query-icon.svg"
                                      width={15}
                                      height={15}
                                      alt={thirdCategory.tooltip}
                                    />
                                  </div>
                                )}

                              {openTooltip ===
                                j.toString() + i.toString() + "dfdfdf" && (
                                <div
                                  className={styles.tooltipText}
                                  data-tooltip={thirdCategory.tooltip}
                                ></div>
                              )}
                            </span>
                            <ol className={styles.levelFourWrapper}>
                              {thirdCategory.fourthLevelElements.nodes.map(
                                (fourthCategory, k) => {
                                  return (
                                    <TreeDropdown
                                      key={k + "sdfdf"}
                                      treedata={fourthCategory}
                                      indexNo={k}
                                    />
                                  );
                                }
                              )}
                            </ol>
                          </li>
                        );
                      }
                    )}
                  </ol>
                </li>
              );
            }
          )}
        </ol>
      </div>
    </LayoutMain>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getHealthCategories {
        topCategoryBy(slug: "fertility-conditions") {
          url
          title
          slug
          secondLevelElements {
            nodes {
              url
              tooltip
              title
              slug
              thirdLevelElements {
                nodes {
                  url
                  tooltip
                  title
                  slug
                  fourthLevelElements {
                    nodes {
                      url
                      tooltip
                      title
                      slug
                      fifthLevelElements {
                        nodes {
                          url
                          tooltip
                          title
                          slug
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: { data },
    revalidate: 1,
  };
}
export default FertilityConditons;
