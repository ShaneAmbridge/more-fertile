import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Modal from "../modal/modal";

import Footer from "./footer/footer";
import styles from "./layout.module.scss";
import NavNew from "./navnew/nav";
import ResourcesBigMenu from "./resourcesBigMenu/resourcesBigMenu";
const LayoutMain = ({ active, children, items }) => {
  const [bigmenuOpen, setBigmenuopen] = useState(false);
  const { openModal, setShowModal, showmodal } = useContext(AuthContext);

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
