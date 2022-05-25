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
            <Link
              href="/categories/category/fertility-conditions/female-conditions"
              passHref
            >
              <a>
                <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                  Female
                </h2>
              </a>
            </Link>
            <ol className={styles.levelThreeWrapper}>
              <li>
                <Link
                  href="/category/fertility-conditions/female-conditions/immune-infertility/"
                  passHref
                >
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Immune
                    </h3>
                  </a>
                </Link>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="ANA – Anti-Nuclear Antibodies which target genetic material"
                      href="/fertility-conditions/ana/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Ana
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="ABAb - Anti-sperm antibodies~"
                      href="/fertility-conditions/asab/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Asab
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="HLA – proteins on cells that indicate “self” to the immune system"
                      href="/fertility-conditions/hla/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Hla
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="LA – Leukocyte Antibodies which target a type of white blood cell"
                      href="/fertility-conditions/la/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          La
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="NK Cells – Natural Killer cells which have many types and can prevent pregnancy when elevated"
                      href="/fertility-conditions/nk-cells/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Nk Cells
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="OA – Ovarian Antibodies which target ovarian tissue"
                      href="/fertility-conditions/oa/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Oa
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Cytokines – Hormone-like chemicals which promote significant changes in the body"
                      href="/fertility-conditions/cytokines/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Cytokines
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  Conditions
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Anovulation is a lack of ovulation, and there are many causes"
                      href="/fertility-treatments/anovulation-treatments/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Anovulation +
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Age – How female age affects fertility levels"
                      href="/fertility-conditions/asab/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Age
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Fallopian Tube Blockages can be caused by mucus plugs, infections and scars"
                      href="/fertility-conditions/blocked-fallopian-tubes"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Fallopian Tube Blockages
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="FLPD is a problem in the second (luteal) phase of menstrual cycles, when the phase is too short or progesterone levels are too low for implantation. "
                      href="/fertility-conditions/blocked-fallopian-tubes"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Luteal Phase Defect
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Implantation failure affects about 70% of unsuccessful IVF cycles"
                      href="/fertility-conditions/implantation-failure"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Implantation Failure
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="A handful of genetic conditions make women much less fertile"
                      href="/fertility-conditions/genetic-conditions"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Genetic Conditions
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="-"
                      href="/fertility-conditions/miscarriage"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Miscarriage
                        </h4>
                      </a>
                    </Link>
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
                    <Link
                      title="Thyroid hormones affect both sexes, but are essential for female fertility"
                      href="/fertility-conditions/thyroid-disorders/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Thyroid Disorders +
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="TUnexplained infertility is often a combination of issues or missed diagnosis"
                      href="/fertility-conditions/unexplained-infertility"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Unexplained Infertility +
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link href="/categories/category/fertility-conditions/both-sexes">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Male
                    </h3>
                  </a>
                </Link>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Age – Male age significantly affects male fertility"
                      href="/fertility-conditions/age-and-male-fertility/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Age
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Causes – There are multiple possible causes of low male fertility"
                      href="/fertility-conditions/causes-of-male-infertility/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Causes
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Causes – There are multiple possible causes of low male fertility"
                      href="/fertility-treatments/erectile-dysfunction-treatment/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Erectile Dysfunction
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Common drugs can significantly reduce male fertility"
                      href="/fertility-conditions/drugs-and-male-fertility/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Drugs
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="A handful of genetic conditions make men much less fertile"
                      href="/fertility-conditions/genetics"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Genetics
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="There are organic and non-organic causes for low libido"
                      href="/fertility-conditions/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Lack Of Libido
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title=" Motility & Morphology – poor motility and morphology is closely related to PFP levels"
                      href="/fertility-conditions/morphology-and-motility-issues/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Motility & Morphology
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title=" Motility & Morphology – poor motility and morphology is closely related to PFP levels"
                      href="/fertility-conditions/morphology-and-motility-issues/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Sperm Count
                        </h4>
                      </a>
                    </Link>
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
