import React from "react";
import LayoutMain from "../components/Layout/layout";

import Link from "next/link";

import styles from "../styles/fertility-health.module.scss";
import FertilityDropdown from "../components/fertilityTreatmentDropdown/fertilityDropdown";
import {
  anovolationData,
  ivfData,
  miscarriageData,
} from "../components/fertilityTreatmentDropdown/fertilityTreeData";

const FertilityTreatments = () => {
  return (
    <LayoutMain>
      <div className={styles.container}>
        <h1 className={`${styles.levelOne} ${styles.rectangle}`}>
          Fertility Treatments
        </h1>
        <ol className={styles.levelTwoWrapper}>
          <li>
            <Link
              title="Female Treatments"
              href="/categories/category/fertility-treatments/female-treatments"
            >
              <a>
                <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                  Female Treatments
                </h2>
              </a>
            </Link>
            <ol className={styles.levelThreeWrapper}>
              <li>
                <Link
                  title="Factors"
                  href="/categories/category/fertility-treatments/female-treatments/ivf-protocols"
                >
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      IVF Protocols
                    </h3>
                  </a>
                </Link>
                <ol className={styles.levelFourWrapper}>
                  <FertilityDropdown treedata={anovolationData} />

                  <li>
                    <Link
                      title="Endometriosis"
                      href="/category/fertility-treatments/female-treatments/ivf-protocols/endometriosis"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Endometriosis
                        </h4>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      title="Fallopian Tube Blockage"
                      href="/category/fertility-treatments/female-treatments/ivf-protocols/fallopian-tube-blockage"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Fallopian Tube Blockage
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Immune Infertility"
                      href="/category/fertility-treatments/female-treatments/ivf-protocols/immune-infertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Immune Infertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Implantation Failure"
                      href="/category/fertility-treatments/female-treatments/ivf-protocols/treatment-of-implantation-failure"
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

                  <FertilityDropdown treedata={ivfData} />

                  <li>
                    <Link
                      title="IVF Protocols & Costs"
                      href="/category/fertility-treatments/female-treatments/ivf-protocols/costs-of-ivf"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          IVF Protocols & Costs
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link href="/categories/cateogry/fertility-treatments/female-treatments/both-sexes-treatments">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Both Sexes Treatments
                    </h3>
                  </a>
                </Link>

                <ol className={styles.levelFourWrapper}>
                  <FertilityDropdown treedata={miscarriageData} />
                  <li>
                    <Link
                      title="Luteal Phase Defect"
                      href="/category/fertility-treatments/female-treatments/both-sexes-treatments/luteal-phase-defect"
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
                      title="Older Women"
                      href="/category/fertility-treatments/female-treatments/both-sexes-treatments/older-women"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Older Women
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="PCOS Package"
                      href="/category/fertility-treatments/female-treatments/both-sexes-treatments/pcos-package"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          PCOS Package
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <Link href="/categories/category/fertility-treatments/male-treatments">
              <a>
                <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                  Male Treatments
                </h2>
              </a>
            </Link>

            <ol className={styles.levelThreeWrapper}>
              <li>
                <Link href="/categories/category/fertility-treatments/male-treatments/standard-treatments">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Standard Treatments
                    </h3>
                  </a>
                </Link>

                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Medication"
                      href="/category/fertility-treatments/male-treatments/standard-treatments/medication"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Medication
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Surgery"
                      href="/category/fertility-treatments/male-treatments/standard-treatments/surgery"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Surgery
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Counselling"
                      href="/category/fertility-treatments/male-treatments/standard-treatments/counselling"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Counselling
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="THYROID DISORDERS"
                      href="/category/fertility-treatments/male-treatments/standard-treatments/thyroid-disorders"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Thyroid Disorders
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Unexplained Infertility"
                      href="/category/fertility-treatments/male-treatments/standard-treatments/unedplained-infertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Unexplained Infertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link href="/categories/category/fertility-treatments/male-treatments/natural-treatments">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Natural Treatments
                    </h3>
                  </a>
                </Link>

                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Erectile Dysfunction"
                      href="/category/fertility-treatments/male-treatments/natural-treatments/erectile-dysfunction-treatment"
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
                      title="Low Sperm Count "
                      href="/category/fertility-treatments/male-treatments/natural-treatments/low-sperm-counts"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Low Sperm Count
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Motility & Morphology"
                      href="/category/fertility-treatments/male-treatments/natural-treatments/morphology-motility-issues"
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
                      title="OLDER MEN"
                      href="/category/fertility-treatments/male-treatments/natural-treatments/older-men"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Older Men
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="PAINFUL ERECTIONS"
                      href="/category/fertility-treatments/male-treatments/natural-treatments/painful-erections-treatments"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Painful Erections
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

export default FertilityTreatments;
