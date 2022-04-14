import styles from "./features.module.scss";
import Image from "next/image";
const Features = ({ ww }) => {
	return (
		<div className={styles.main}>
			{ww < 601 && <Image layout='fill' src='/images/coupleSmall.png' />}
			{ww > 600 && <Image layout='fill' src='/images/couple.png' />}
			<div className={styles.containerTop}>
				<div className={styles.container}>
					<div className={styles.features}>
						<h2 className={styles.title}>
							Premium Tests & Products to support you
						</h2>
						<div className={styles.row}>
							<div className={styles.left}>Functional medicine</div>
							<p className={styles.right}>
								Access “functional medicine” tests to assess your needs that are
								usually only available from clinics.
							</p>
						</div>
						<div className={styles.row}>
							<div className={styles.left}>Natural supplements</div>
							<p className={styles.right}>
								“Foodstate” supplements are the most natural available. All our
								products support the tests we offer.
							</p>
						</div>
						<div className={styles.row}>
							<div className={styles.left}>Herbal medicine</div>
							<p className={styles.right}>
								Herbs can dramatically improve pregnancy rates and sperm health.
							</p>
						</div>
						<button className={styles.button}>Discover more</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
