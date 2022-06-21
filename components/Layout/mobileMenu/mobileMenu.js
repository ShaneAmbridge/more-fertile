import styles from "./mobileMenu.module.scss";
import Image from "next/image";
import { useRef, useState } from "react";
const MobileMenu = ({ setMobileOpen }) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className={styles.mobile}>
        <div onClick={() => setMobileOpen(false)} className={styles.close}>
          <Image src="/images/close.svg" width={20} height={20} alt="close" />
        </div>
      </div>

      <div className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} onClick={() => setMobileOpen(false)}>
              About Us
            </a>
          </li>
          <li className={styles.item}>
            <div
              className={`${
                open
                  ? `${styles.sidebarItem} ${styles.open}`
                  : styles.sidebarItem
              }`}
            >
              <a
                className={`${styles.link} ${styles.closeDropdown}`}
                onClick={() => setOpen(!open)}
                dropdown={open ? "yes" : "no"}
              >
                Fertility Profiles
                <Image
                  className={styles.arrow}
                  src="/images/dropdown/dropdown-arrow.svg"
                  width={15}
                  height={15}
                  alt="Rescources"
                />
              </a>
              <div
                className={`${
                  open
                    ? `${styles.sidebarContent} ${styles.animationPlus}`
                    : styles.sidebarContent
                }`}
              >
                <ul className={styles.dropdown__list}>
                  <li className={styles.item}>
                    <a
                      className={styles.link}
                      onClick={() => setMobileOpen(false)}
                    >
                      Male Fertility Profiles
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a
                      className={styles.link}
                      onClick={() => setMobileOpen(false)}
                    >
                      Female Fertility Profiles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div
              className={`${
                isOpen
                  ? `${styles.sidebarItem} ${styles.open}`
                  : styles.sidebarItem
              }`}
            >
              <a
                className={`${styles.link} ${styles.closeDropdown}`}
                onClick={() => setIsOpen(!isOpen)}
                dropdown={isOpen ? "yes" : "no"}
              >
                Resources
                <Image
                  className={styles.arrow}
                  src="/images/dropdown/dropdown-arrow.svg"
                  width={15}
                  height={15}
                  alt="Rescources"
                />
              </a>
              <div
                className={`${
                  isOpen
                    ? `${styles.sidebarContent} ${styles.animationPlus}`
                    : styles.sidebarContent
                }`}
              >
                <ul className={styles.dropdown__list}>
                  <li className={styles.item}>
                    <a
                      className={styles.link}
                      onClick={() => setMobileOpen(false)}
                    >
                      Fertility Health
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a
                      className={styles.link}
                      onClick={() => setMobileOpen(false)}
                    >
                      Fertility Conditions
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a
                      className={styles.link}
                      onClick={() => setMobileOpen(false)}
                    >
                      Fertility Treatments
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a
                      className={styles.link}
                      onClick={() => setMobileOpen(false)}
                    >
                      Lifestyle & Fertility
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <a className={styles.link} onClick={() => setMobileOpen(false)}>
              Products
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={`${styles.link} ${styles.pro}`}
              onClick={() => setMobileOpen(false)}
            >
              <div className={styles.loginButton}>Login</div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={`${styles.link} ${styles.pro}`}
              onClick={() => setMobileOpen(false)}
            >
              <div className={`${styles.forProffesional}`}>
                <span>PRO</span>
                For Professionals
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MobileMenu;