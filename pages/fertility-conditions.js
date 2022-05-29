import React, { useState, useRef } from "react";
import LayoutMain from "../components/Layout/layout";

import Link from "next/link";

import styles from "../styles/fertility-conditions.module.scss";
import TreeDropdown from "../components/treeDropdown/treeDropdown";
import {
  anovulationData,
  endometriosisData,
  thyroidData,
  unexplainedInfertilityData,
} from "../components/treeDropdown/treeData";

const FertilityConditons = () => {
  const [setActive, setActiveState] = useState(false);

  return (
    <LayoutMain>
      <div className={styles.container}>
        <h1 className={`${styles.levelOne} ${styles.rectangle}`}>
          Fertility Conditions
        </h1>
        <ol className={styles.levelTwoWrapper}>
          <li>
            <Link
              href="/categories/category/fertility-conditions/female"
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
                  href="/categories/category/fertility-conditions/female/immune-infertility/"
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
                      href="/category/fertility-conditions/female/immune/ana"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          ANA
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="APA"
                      href="/category/fertility-conditions/female/immune/apa"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          APA
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="ABAb - Anti-sperm antibodies~"
                      href="/category/fertility-conditions/female/immune/asab"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          ASAL
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Cytokines – Hormone-like chemicals which promote significant changes in the body"
                      href="/category/fertility-conditions/female/immune/cytokines"
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
                  <li>
                    <Link
                      title="HLA – proteins on cells that indicate “self” to the immune system"
                      href="/category/fertility-conditions/female/immune/hla"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          HLA
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Immune Balance & Fertility"
                      href="/category/fertility-conditions/female/immune/immune-balance-and-fertility/"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Immune Balance & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="LA – Leukocyte Antibodies which target a type of white blood cell"
                      href="/category/fertility-conditions/female/immune/la"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          LA
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="NK Cells – Natural Killer cells which have many types and can prevent pregnancy when elevated"
                      href="/category/fertility-conditions/female/immune/nk-cells"
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
                      href="/category/fertility-conditions/female/immune/oa"
                      passHref
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          OA
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link href="/categories/category/fertility-conditions/female/conditions">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Conditions
                    </h3>
                  </a>
                </Link>
                <ol className={styles.levelFourWrapper}>
                  <TreeDropdown treedata={anovulationData} />
                  <TreeDropdown treedata={endometriosisData} />

                  <li>
                    <Link
                      title="Age – How female age affects fertility levels"
                      href="/category/fertility-conditions/female/conditions/asab"
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
                      href="/category/fertility-conditions/female/conditions/blocked-fallopian-tubes"
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
                      href="/category/fertility-conditions/female/conditions/blocked-fallopian-tubes"
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
                      href="/category/fertility-conditions/female/conditions/implantation-failure"
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
                      href="/category/fertility-conditions/female/conditions/genetic-conditions"
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
                      href="/category/fertility-conditions/female/conditions/miscarriage"
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
            <Link href="/categories/category/fertility-conditions/conditions">
              <a>
                <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                  Conditions
                </h2>
              </a>
            </Link>
            <ol className={styles.levelThreeWrapper}>
              <li>
                <Link
                  title="Thyroid hormones affect both sexes, but are essential for female fertility"
                  href="/categories/category/fertility-conditions/conditions/both-sexes"
                  passHref
                >
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Both M/F
                    </h3>
                  </a>
                </Link>

                <ol className={styles.levelFourWrapper}>
                  <TreeDropdown treedata={thyroidData} />
                  <TreeDropdown treedata={unexplainedInfertilityData} />
                </ol>
              </li>
              <li>
                <Link href="/category/fertility-conditions/conditions/male">
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
                      href="/category/fertility-conditions/conditions/male/age-and-male-fertility/"
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
                      href="/category/fertility-conditions/conditions/male/causes-of-male-infertility/"
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
                      href="/category/fertility-conditions/conditions/male/erectile-dysfunction-treatment"
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
                      href="/category/fertility-conditions/conditions/male/drugs-and-male-fertility"
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
                      href="/category/fertility-conditions/conditions/male/genetics"
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
                      href="/category/fertility-conditions/conditions/male/lack-of-libido"
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
                      href="/category/fertility-conditions/conditions/male/morphology-and-motility-issues/"
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
                      href="/category/fertility-conditions/conditions/male/morphology-and-motility-issues"
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

export default FertilityConditons;
