import styles from "./resourcesBigMenu.module.scss";
import Image from "next/image";
const ResourcesBigMenu = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.items}>
            <h4>Fertility Health</h4>
            <div className={styles.container}>
              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/male-health.svg"}
                  width={20}
                  height={20}
                />
                <span>Male Health</span>
              </div>

              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/female-health.svg"}
                  width={14.5}
                  height={23.2}
                />
                <span>Female Health</span>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/glossary-group.svg"}
                  width={20}
                  height={22}
                />
                <span>Glossary</span>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/fetility-tests.svg"}
                  width={15}
                  height={22.5}
                />
                <span>Fetility Tests</span>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <h4>Fertility Conditions</h4>
            <div className={styles.container}>
              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/male-conditions.svg"}
                  width={20}
                  height={20}
                />
                <span>Female Conditions</span>
              </div>

              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/female-conditions.svg"}
                  width={14.5}
                  height={23.2}
                />
                <span>Female Conditions</span>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/both-sexes.svg"}
                  width={14}
                  height={23}
                />
                <span>Both Sexes</span>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <h4>Fertility Treatments</h4>
            <div className={styles.container}>
              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/male-conditions.svg"}
                  width={20}
                  height={20}
                />
                <span>Male Treatments</span>
              </div>

              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/female-treatments.svg"}
                  width={14.5}
                  height={23.2}
                />
                <span>Female Treatments</span>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/both-sexes.svg"}
                  width={14}
                  height={23}
                />
                <span>Both Sexes</span>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <h4>Lifestyle & Fertility</h4>
            <div className={styles.container}>
              <div className={styles.item}>
                <Image
                  src={"/images/dropdown/age-fertility.svg"}
                  width={20}
                  height={20}
                />
                <span>Age & Fertility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesBigMenu;
