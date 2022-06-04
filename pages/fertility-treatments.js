import React, { useState } from "react";
import LayoutMain from "../components/Layout/layout";
import Link from "next/link";
import styles from "../styles/fertility-health.module.scss";
import FertilityDropdown from "../components/fertilityTreatmentDropdown/fertilityDropdown";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Image from "next/image";

const FertilityTreatments = ({ data }) => {
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
                <li key={i + "ddfdf"}>
                  <span className={`${styles.levelTwo} ${styles.rectangle}`}>
                    <Link href={secondCategory.url}>
                      <a>
                        <h2 title={secondCategory.tooltip}>
                          {secondCategory.title}
                        </h2>
                      </a>
                    </Link>

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
                              <Link
                                title={thirdCategory.title}
                                href={thirdCategory.url}
                              >
                                <a>
                                  <h3 title={thirdCategory.tooltip}>
                                    {thirdCategory.title}
                                  </h3>
                                </a>
                              </Link>

                              <div
                                onClick={() =>
                                  toggle(j.toString() + i.toString() + "dfdfdf")
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
                                    <FertilityDropdown
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
        topCategoryBy(slug: "fertility-treatments") {
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

export default FertilityTreatments;
