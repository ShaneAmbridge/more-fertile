import styles from "./mission.module.scss";
import Image from "next/image";
const Missions = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.titleAndDescription}>
					<h2 className={styles.title}>The morefertile mission:</h2>
					<p className={styles.des}>
						To provide ground-breaking, natural solutions to help you navigate
						your Fertility Journey successfully. ​
					</p>
				</div>
				<div className={styles.cards}>
					<div className={styles.card}>
						<h3>More Natural</h3>
						<div className={styles.cardImage}>
							<Image src='/images/left.png' width='330px' height='197px' />
						</div>
					</div>
					<div className={styles.card}>
						<h3>More Fertile</h3>
						<div className={styles.cardImage}>
							<Image
								src='/images/morefertile-logo.png'
								width='330px'
								height='197px'
							/>
						</div>
					</div>
					<div className={styles.card}>
						<h3>More You</h3>
						<div className={styles.cardImage}>
							<Image src='/images/right.png' width='330px' height='197px' />
						</div>
					</div>
				</div>
				<h2 className={styles.bottomText}>
					“ FREE scientific information on all aspects of fertility. ”
				</h2>
			</div>
		</div>
	);
};

export default Missions;
