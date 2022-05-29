import React from "react";
import LayoutMain from "../components/Layout/layout";

import Link from "next/link";

import styles from "../styles/fertility-health.module.scss";
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
                  href="/fertility-health/lifestyle/factors"
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
                      title="Age "
                      href="/category/fertility-health/lifestyle/factors/age-and-fertility"
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
                      title="Emotions"
                      href="/fertility-health/lifestyle/factors/emotions-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Emotions
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Exercise"
                      href="/fertility-health/lifestyle/factors/exercise-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Exercise
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Microbiome"
                      href="/fertility-health/lifestyle/factors/microbiome-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Microbiome
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Weight"
                      href="/fertility-health/lifestyle/factors/weight-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Weight
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link href="/fertility-health/lifestyle/substances">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Substances
                    </h3>
                  </a>
                </Link>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Alcohol"
                      href="/fertility-health/lifestyle/substances/alcohol-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Alcohol
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Caffeine"
                      href="/fertility-health/lifestyle/substances/caffeine-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Caffeine
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Diet"
                      href="/fertility-health/lifestyle/substances/diet-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Diet
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Drugs"
                      href="/fertility-health/lifestyle/substances/drugs-and-fertility/"
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
                      title="Smoking"
                      href="/fertility-health/lifestyle/substances/smoking-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Smoking
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Supplements"
                      href="/fertility-health/lifestyle/substances/supplements-and-fertility/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Supplements
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <Link href="/fertility-health/health">
              <a>
                <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                  Health
                </h2>
              </a>
            </Link>

            <ol className={styles.levelThreeWrapper}>
              <li>
                <Link href="/fertility-health/health/female">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Female
                    </h3>
                  </a>
                </Link>

                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Eggs & Organs"
                      href="/fertility-health/health/female/female-health/eggs-organs/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Eggs & Organs +
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Hormones"
                      href="/fertility-health/health/female/female-health/hormones/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Hormones +
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Get Pregnant"
                      href="/fertility-health/health/female/female-health/get-pregnant/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Get Pregnant +
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Pregnancy"
                      href="/fertility-health/health/female/female-health/pregnancy/"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Pregnancy +
                        </h4>
                      </a>
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link href="/fertility-health/health/male">
                  <a>
                    <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                      Male
                    </h3>
                  </a>
                </Link>

                <ol className={styles.levelFourWrapper}>
                  <li>
                    <Link
                      title="Sperm & Organs"
                      href="/fertility-health/health/male/male-organs-sperm"
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
                      title="Changing Fertility"
                      href="/fertility-health/health/male/changing-male-fertility"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Changing Fertility
                        </h4>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Semen Sampling"
                      href="/fertility-health/health/male/semen-sampling-2"
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
                  <li>
                    <Link
                      title="Sperm Tests"
                      href="/fertility-health/health/male/additional-sperm-tests"
                    >
                      <a>
                        <h4
                          className={`${styles.levelFour} ${styles.rectangle}`}
                        >
                          Sperm Tests
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

export default FertilityHealth;
