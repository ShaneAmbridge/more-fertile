import styles from "./hero.module.scss";
import Image from "next/image";
const Hero = ({ ww }) => {
	return (
		<div className={styles.main}>
			{ww < 601 && (
				<Image layout='fill' src='/images/morefertile-mainSmall.png' />
			)}
			{ww > 600 && <Image layout='fill' src='/images/morefertile-main.png' />}
			<div className={styles.containerwrapper}>
				<div className={styles.container}>
					<p className={styles.siteName}>morefertile®</p>
					<div className={styles.title}>
						Natural, <span>ground-breaking</span> fertility support
					</div>
					<p className={styles.discription}>
						Comprehensive fertility information and products
					</p>
					<button className={styles.button}>
						<img
							width='16px'
							height='13px'
							src={"/images/user-edit-solid.svg"}
						/>
						Build your fertility profile
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
