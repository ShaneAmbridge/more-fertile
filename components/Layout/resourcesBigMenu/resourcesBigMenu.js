import styles from "./resourcesBigMenu.module.scss";
import Image from "next/image";
import Link from "next/link";
const ResourcesBigMenu = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.items}>
            <h4>
              <Link href="/fertility-health" passHref>
                <a>Fertility Health</a>
              </Link>
            </h4>
            <div className={styles.container}>
              <Link href="/categories/category/fertility-health/health/male-health">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/male-health.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />

                    <span>Male Health</span>
                  </div>
                </a>
              </Link>
              <Link href="/categories/category/fertility-health/health/female-health">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/female-health.svg"}
                      width={14.5}
                      height={23.2}
                      alt=""
                    />

                    <span>Female Health</span>
                  </div>
                </a>
              </Link>
              <Link href="/fertility-health/glossary">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/glossary-group.svg"}
                      width={20}
                      height={22}
                      alt=""
                    />

                    <span>Glossary</span>
                  </div>
                </a>
              </Link>
              <Link href="/fertility-health/fertility-tests">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/fetility-tests.svg"}
                      width={15}
                      height={22.5}
                      alt=""
                    />

                    <span>Fetility Tests</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.items}>
            <h4>
              <Link href="/fertility-conditions" passHref>
                <a>Fertility Conditions</a>
              </Link>
            </h4>
            <div className={styles.container}>
              <Link href="/categories/category/fertility-conditions/conditions/male-conditions">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/male-conditions.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />

                    <span>Male Conditions</span>
                  </div>
                </a>
              </Link>
              <Link href="/categories/category/fertility-conditions/female/female-conditions">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/female-conditions.svg"}
                      width={14.5}
                      height={23.2}
                      alt=""
                    />

                    <span>Female Conditions</span>
                  </div>
                </a>
              </Link>
              <Link href="/categories/category/fertility-conditions/both-sexes/unexplained-infertility">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/both-sexes.svg"}
                      width={14}
                      height={23}
                      alt=""
                    />

                    <span>Unexplained</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.items}>
            <h4>
              <Link href="/fertility-treatments" passHref>
                <a> Fertility Treatments</a>
              </Link>
            </h4>
            <div className={styles.container}>
              <Link href="/categories/category/fertility-treatments/male-treatments">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/male-conditions.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />

                    <span>Male Treatments</span>
                  </div>
                </a>
              </Link>
              <Link href="/categories/category/fertility-treatments/female-treatments">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/female-treatments.svg"}
                      width={14.5}
                      height={23.2}
                      alt=""
                    />
                    <span>Female Treatments</span>
                  </div>
                </a>
              </Link>
              <Link href="/categories/category/fertility-treatments/female-treatments/ivf">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/both-sexes.svg"}
                      width={14}
                      height={23}
                      alt=""
                    />
                    <span>IVF Protocols</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.items}>
            <Link href="/categories/category/fertility-health/lifestyle-fertility">
              <a>
                <h4>Lifestyle & Fertility</h4>
              </a>
            </Link>
            <div className={styles.container}>
              <Link href="/categories/category/fertility-health/lifestyle-fertility/lifestyle-factors">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/age-fertility.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span>Lifestyle Factors</span>
                  </div>
                </a>
              </Link>
              <Link href="/categories/category/fertility-health/lifestyle-fertility/lifestyle-substances">
                <a>
                  <div className={styles.item}>
                    <Image
                      src={"/images/dropdown/age-fertility.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span>Lifestyle Substances</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesBigMenu;
