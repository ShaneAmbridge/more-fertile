import { useState } from "react";
import { style } from "../postStyle/postStyle";
import BigMenu from "./bigmenu/bigmenu";
import Footer from "./footer/footer";
import styles from "./layout.module.scss";
import NavNew from "./navnew/nav";
import ResourcesBigMenu from "./resourcesBigMenu/resourcesBigMenu";
const LayoutMain = ({ active, children, items }) => {
  const [bigmenuOpen, setBigmenuopen] = useState(false);

  return (
    <div className={styles.main}>
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
      <Footer />
      <div className="demo">
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab laborum
          sit reiciendis, dolorem explicabo voluptas labore, amet minus
          doloremque sequi corrupti excepturi facilis aperiam maiores eaque
          commodi repellendus. Necessitatibus, ipsam.
        </h3>
      </div>
    </div>
  );
};

export default LayoutMain;
