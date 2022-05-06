import styles from "./moreFertility.module.scss";
import Image from "next";
const MoreFertility = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.titleAndAction}>
					<div className={styles.titles}>
						<h2 className={styles.title}>
							More <span>Natural.</span>
						</h2>
						<h2 className={styles.title}>
							More <span style={{ color: "#7F2F75" }}>Fertile.</span>
						</h2>
						<h2 className={styles.title}>
							More <span>You.</span>
						</h2>
					</div>
					<div className={styles.description}>
						We provide ground-breaking, natural solutions to help you navigate
						your Fertility Journey successfully. ​
					</div>
					<button className={styles.button}>Find out more</button>
				</div>
				<div className={styles.imageContainer}>
					<div className={styles.image}>
						{/* <Image width='100%' height='100%' src='/images/mor.jpg' /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoreFertility;
