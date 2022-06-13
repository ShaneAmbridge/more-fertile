import React from "react";
import LayoutMain from "../components/Layout/layout";
import styles from "../styles/better-system.module.scss";
import Image from "next/image";

import BetterSystemLeft from "../components/betterSystemLeft/betterSystemLeft";
import BetterSystemSidebar from "../components/betterSystemSidebar/betterSystemSidebar";

const SystemBiology = () => {
  return (
    <LayoutMain>
      <div className={styles.main}>
        <div className={styles.main__content}>
          <div className={styles.container}>
            <p className={styles.breadcrumb}>
              Morefertitle &gt; System Biology
            </p>

            <h1 className={styles.title}>System Biology</h1>

            <div className={styles.imgContainter}>
              <Image
                src="/better-system.png"
                width={1024}
                height={487}
                layout="responsive"
                alt="better-system"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.content__left}>
                <BetterSystemLeft />
              </div>
              <div className={styles.content__right}>
                <BetterSystemSidebar />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bg__color}></div>
      </div>
    </LayoutMain>
  );
};

export default SystemBiology;
