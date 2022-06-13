import { useState } from "react";
import Modal from "../modal/modal";
import { style } from "../postStyle/postStyle";
import BigMenu from "./bigmenu/bigmenu";
import Footer from "./footer/footer";
import styles from "./layout.module.scss";
import NavNew from "./navnew/nav";
import ResourcesBigMenu from "./resourcesBigMenu/resourcesBigMenu";
const LayoutMain = ({
  active,
  children,
  items,
  openModal,
  showmodal,
  setShowModal,
}) => {
  const [bigmenuOpen, setBigmenuopen] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <Modal showmodal={showmodal} setShowModal={setShowModal} />
        <NavNew
          setBigmenuopen={setBigmenuopen}
          bigmenuOpen={bigmenuOpen}
          items={items}
        />
        <div className={styles.border}>
          {bigmenuOpen && <div className={styles.line}></div>}
        </div>
        {/* {bigmenuOpen && <BigMenu categories={items?.categories} />} */}
        {bigmenuOpen && <ResourcesBigMenu categories={items?.categories} />}
        {children}
        <Footer openModal={openModal} />
      </div>
    </>
  );
};

export default LayoutMain;
