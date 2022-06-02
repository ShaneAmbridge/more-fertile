import React from "react";
import LayoutMain from "../components/Layout/layout";

import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import styles from "../styles/fertility-conditions.module.scss";
import TreeDropdown from "../components/fertilityConditonDropdown/treeDropdown";

const FertilityConditons = ({ data }) => {
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
                  <Link title={secondCategory.title} href={secondCategory.url}>
                    <a>
                      <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                        {secondCategory.title}
                      </h2>
                    </a>
                  </Link>
                  <ol className={styles.levelThreeWrapper}>
                    {secondCategory.thirdLevelElements.nodes.map(
                      (thirdCategory, j) => {
                        return (
                          <li key={j + "dfdfdf"}>
                            <Link
                              title={thirdCategory.title}
                              href={thirdCategory.url}
                            >
                              <a>
                                <h3
                                  className={`${styles.levelThree} ${styles.rectangle}`}
                                >
                                  {thirdCategory.title}
                                </h3>
                              </a>
                            </Link>
                            <ol className={styles.levelFourWrapper}>
                              {thirdCategory.fourthLevelElements.nodes.map(
                                (fourthCategory, k) => {
                                  return (
                                    <TreeDropdown
                                      key={k + "sdfdf"}
                                      treedata={fourthCategory}
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
