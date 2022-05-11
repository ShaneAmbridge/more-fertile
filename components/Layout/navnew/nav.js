import Image from "next/image";
import { useState } from "react";
import styles from "./nav.module.scss";

const NavNew = ({ items, setBigmenuopen, bigmenuOpen }) => {
	const [searchbox, setSearchBox] = useState(false);

	return (
		<nav className={styles.main}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Image
						src={"/images/flower.png"}
						width='54px'
						height='32px'
						alt='logo'
					/>
					<Image
						src={"/images/new/Morefertile.svg"}
						width='113px'
						height='20px'
						alt='logo'
					/>
				</div>
				<div className={styles.menu}>
					<div className={styles.menuItem}>About Us</div>
					<div className={styles.menuItem}>Fertility Profiles</div>
					<div className={styles.menuItem}>Recources</div>
					<div className={styles.menuItem}>Products</div>
				</div>
				<div className={styles.actionButtons}>
					<div className={styles.loginButton}>Login</div>
					<div className={styles.forProffesional}>
						<span>PRO</span>
						For Professionals
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavNew;
