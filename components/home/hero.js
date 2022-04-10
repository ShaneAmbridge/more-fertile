import styles from "./hero.module.scss";
const Hero = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<p className={styles.siteName}>morefertile®</p>
				<div className={styles.title}>
					Natural, <span>ground-breaking</span> fertility support
				</div>
				<p className={styles.discription}>
					Comprehensive fertility information and products
				</p>
				<button className={styles.button}>
					<img width='16px' height='13px' src={"/images/user-edit-solid.svg"} />
					Build your fertility profile
				</button>
			</div>
		</div>
	);
};

export default Hero;
