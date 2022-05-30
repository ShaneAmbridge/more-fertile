import React from "react";
import LayoutMain from "../components/Layout/layout";

import Link from "next/link";

import styles from "../styles/fertility-health.module.scss";

import HealthDropdown from "../components/healthTreeDropdown/healthDropdown";
import {
  eggsAgeData,
  getPragnantData,
  hormonesData,
  pregnanayData,
  spermTestsData,
} from "../components/healthTreeDropdown/healthDropdownData";
const FertilityHealth = () => {
  return (
    <LayoutMain>
      <div className={styles.container}>
        <h1 className={`${styles.levelOne} ${styles.rectangle}`}>
          Fertility Health
        </h1>
        <ol className={styles.levelTwoWrapper}>
          <li>
            <Link
              title="Lifestyle"
              href="/categories/category/fertility-health/lifestyle-fertility"
            >
              <a>
                <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                  Lifestyle
                </h2>
              </a>
            </Link>
            <ol className={styles.levelThreeWrapper}>
              <li>
                <Link
                  title="Factors"
                  href="/categories/category/fertility-health/lifestyle/factors"
                >
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Factors
                    </h3>
                  </a>
                </Link>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Age & Fertility"
                      href="/category/fertility-health/lifestyle/factors/age-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Age & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Emotions & Fertility"
                      href="/category/fertility-health/lifestyle/factors/emotions-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Emotions & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Exercise & Fertility"
                      href="/category/fertility-health/lifestyle/factors/exercise-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Exercise & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Microbiome & Fertility"
                      href="/category/fertility-health/lifestyle/factors/microbiome-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Microbiome & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Oxidative Stress & Fertility"
                      href="/category/fertility-health/lifestyle/factors/oxidative-stress-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Oxidative Stress & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Weight"
                      href="/category/fertility-health/lifestyle/factors/weight-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Weight & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link href="/categories/category/fertility-health/lifestyle/substances">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Substances
                    </h3>
                  </a>
                </Link>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Alcohol & Fertility"
                      href="/category/fertility-health/lifestyle/substances/alcohol-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Alcohol & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Caffeine & Fertility"
                      href="/category/fertility-health/lifestyle/substances/caffeine-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Caffeine & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Diet & Fertility"
                      href="/category/fertility-health/lifestyle/substances/diet-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Diet & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Drugs & Fertility"
                      href="/category/fertility-health/lifestyle/substances/drugs-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Drugs & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Smoking & Fertility"
                      href="/category/fertility-health/lifestyle/substances/smoking-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Smoking & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Supplements & Fertility"
                      href="/category/fertility-health/lifestyle/substances/supplements-and-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Supplements & Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <Link href="/categories/category/fertility-health/health">
              <a>
                <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                  Health
                </h2>
              </a>
            </Link>

            <ol className={styles.levelThreeWrapper}>
              <li>
                <Link href="/categories/category/fertility-health/health/female-health">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Female Health
                    </h3>
                  </a>
                </Link>

                <ol className={styles.levelFourWrapper}>
                  <HealthDropdown treedata={eggsAgeData} />
                  <HealthDropdown treedata={hormonesData} />
                  <HealthDropdown treedata={getPragnantData} />
                  <HealthDropdown treedata={pregnanayData} />
                </ol>
              </li>
              <li>
                <Link href="/categories/category/fertility-health/health/male-health">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Male Health
                    </h3>
                  </a>
                </Link>

                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Sperm & Organs"
                      href="/category/fertility-health/health/male-health/male-organs-sperm"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Sperm & Organs
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Changing Male Fertility"
                      href="/category/fertility-health/health/male-health/changing-male-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Changing Male Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Semen Sampling"
                      href="/category/fertility-health/health/male-health/semen-sampling-2"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Semen Sampling
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <HealthDropdown treedata={spermTestsData} />
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </LayoutMain>
  );
};

export default FertilityHealth;
