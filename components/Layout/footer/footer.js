import styles from "./footer.module.scss";
import Image from "next/image";
const Footer = () => {
	return (
		<div className={styles.main}>
			<div className={styles.menu}>
				<div className={styles.container}>
					<div className={styles.logoAndSocial}>
						<div className={styles.logo}>
							<Image width='69px' height='41px' src='/images/flower.png' />
							<Image
								width='119px'
								height='18px'
								src='/images/new/morefertile.svg'
							/>
						</div>
						<div className={styles.socials}>
							<Image width='45px' height='45px' src='/images/new/fb.svg' />
							<Image width='45px' height='45px' src='/images/new/twitter.svg' />
							<Image width='45x' height='45px' src='/images/new/in.svg' />
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
			<div className={styles.bottom}>
				<div className={styles.container}>
					<p>Start your natural fertility journey today</p>
					<div className={styles.button}>Get Started</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
