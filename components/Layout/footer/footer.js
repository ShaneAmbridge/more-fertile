import styles from "./footer.module.scss";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
const Footer = ({ openModal }) => {
  const [toggle, setToggle] = useState(true);
  const toggleRef = useRef();

  const [size, setSize] = useState(0);
  const [ww, setWw] = useState(0);
  useLayoutEffect(() => {
    setSize(window.innerWidth);
    // console.log(window.innerWidth);
  }, []);
  useEffect(() => {
    setWw(size);
  }, [size]);

  useEffect(() => {
    if (toggle) {
      if (ww < 901) {
        toggleRef.current.style.height = "90px";
      }
      toggleRef.current.style.height = "78px";
      toggleRef.current.style.paddingX = "15px";
      toggleRef.current.style.paddingY = "22px";
    } else {
      toggleRef.current.style.height = "0px";
    }
  }, [toggle]);
  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <div className={styles.container}>
          <div className={styles.logoAndSocial}>
            <div className={styles.logo}>
              <Image
                width="69px"
                height="41px"
                src="/images/flower.png"
                alt=""
              />
              <Image
                width="119px"
                height="18px"
                src="/images/new/Morefertile.svg"
                alt=""
              />
            </div>
            <div className={styles.socials}>
              <Image
                width="45px"
                height="45px"
                src="/images/new/fb.svg"
                alt=""
              />
              <Image
                width="45px"
                height="45px"
                src="/images/new/twitter.svg"
                alt=""
              />
              <Image
                width="45x"
                height="45px"
                src="/images/new/in.svg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.itemcontainer}>
            <div className={styles.items}>
              <h3>Useful links</h3>
              <div className={styles.link}>About Us</div>
              <div className={styles.link}>Fertility Profiles</div>
              <div className={styles.link}>Resources</div>
              <div className={styles.link}>Tests & Products</div>
            </div>
            <div className={styles.items}>
              <h3>Accounts</h3>
              <div className={styles.link}>Login / Sign Up</div>
              <div className={styles.link}>For Professionals</div>
              <div className={styles.link}>My Subscriptions</div>
            </div>
            <div className={styles.items}>
              <h3>Support</h3>
              <div className={styles.link}>FAQ</div>
              <div className={styles.link}>Terms & Conditions</div>
              <div className={styles.link}>Privacy Policy</div>
              <div className={styles.link}>Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.toggleContainer}>
        <div className={styles.wrapperRelative}>
          <div className={styles.toggleShow} onClick={() => setToggle(!toggle)}>
            <Image
              src="/images/footer-close.svg"
              width={14}
              height={14}
              alt=""
            />
          </div>
          <div ref={toggleRef} className={styles.bottom}>
            {toggle && (
              <div className={styles.container}>
                <p>Start your natural fertility journey today</p>
                <div onClick={openModal} className={styles.button}>
                  Get Started
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          style={
            toggle
              ? { display: "none" }
              : {
                  display: "block",
                }
          }
          className={styles.toggleRemove}
        >
          <div className={styles.arrow}>
            <Image
              src="/images/new/down-arrow.svg"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
