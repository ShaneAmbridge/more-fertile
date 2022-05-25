import React from "react";
import LayoutMain from "../components/Layout/layout";
import { gql } from "@apollo/client";
import Link from "next/link";
import client from "../apollo-client";
import styles from "../styles/fertility-conditions.module.scss";
const tree = ({ data }) => {
  console.log(data);
  return (
    <LayoutMain>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data.pages.nodes[0].content,
        }}
        
      ></div> */}

      <div className={styles.container}>
        <h1 className={`${styles.levelOne} ${styles.rectangle}`}>
          Fertility Conditions
        </h1>
        <ol className={styles.levelTwoWrapper}>
          <li>
            <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
              <Link href="/category/fertility-conditions/female-conditions/immune-infertility/">
                <a>Female</a>
              </Link>
            </h2>
            <ol className={styles.levelThreeWrapper}>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  <Link href="/category/fertility-conditions/female-conditions/immune-infertility/">
                    <a>Female</a>
                  </Link>
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Ana
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Asab
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Hla
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      La
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      <li>Nk Cells</li>
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Oa
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Cytokines
                    </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  Conditions
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Anovulation +
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Female Age
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Fallopian Tube Blockages
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      LUTEAL PHASE DEFECT
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Implantation Failure
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Genetic Conditions
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Miscarriage
                    </h4>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
              Conditions
            </h2>
            <ol className={styles.levelThreeWrapper}>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  Both M/F
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Thyroid Disorders +
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Unexplained Infertility +
                    </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  Male
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Age
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Causes
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Erectile Dysfunction
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Drugs
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Genetics
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Lack Of Libido
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Motility & Morphology
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Sperm Count
                    </h4>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </LayoutMain>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query treeData {
        pages(where: { name: "fertility-conditions" }) {
          nodes {
            content(format: RENDERED)
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

export default tree;
