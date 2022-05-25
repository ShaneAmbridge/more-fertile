import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

const NavNew = ({ items, setBigmenuopen, bigmenuOpen }) => {
  const [searchbox, setSearchBox] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <nav className={styles.main} ref={headerRef}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <Image
                src={"/images/flower.png"}
                width="54px"
                height="32px"
                alt="logo"
              />
              <Image
                src={"/images/new/Morefertile.svg"}
                width="113px"
                height="20px"
                alt="logo"
              />
            </div>
          </a>
        </Link>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            About Us
            <img
              // className={styles.arrow}
              src="/images/down.png"
              alt="Rescources"
            />
          </div>
          <div className={styles.menuItem}>
            Fertility Profiles
            <img src="/images/down.png" alt="Rescources" />
          </div>
          <div
            className={styles.menuItem}
            bigmenu={bigmenuOpen ? "yes" : "no"}
            onClick={() => setBigmenuopen(!bigmenuOpen)}
          >
            Rescources
            <img
              className={styles.arrow}
              src="/images/down.png"
              alt="Rescources"
            />
          </div>
          <div className={styles.menuItem}>Products</div>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.loginButton}>Login</div>
          <div className={styles.forProffesional}>
            <span>PRO</span>
            For Professionals
          </div>
        </div>
        <div className={styles.mobileMenu}>
          <div className={styles.menuIcon}>
            <img src="/images/new/mobileMenuIcon.svg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavNew;
