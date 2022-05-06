import styles from "./uniqueFeatures.module.scss";
import Image from "next/image";
const UniqueFeatures = ({ ww }) => {
	return (
		<div className={styles.main}>
			{ww < 601 && <Image layout='fill' src='/images/motherAndBabySmall.png' />}
			{ww > 600 && <Image layout='fill' src='/images/motherAndBaby.png' />}
			<div className={styles.containerTop}>
				<div className={styles.container}>
					<div className={styles.features}>
						<p className={styles.why}>WHY CHOOSE US</p>
						<h2 className={styles.title}>What Makes morefertile® Unique?</h2>
						<div className={styles.row}>
							<div className={styles.left}>
								<span>Our Approach</span>
								<span>
									We passionately believe you should be fully informed about
									getting pregnant.
								</span>
							</div>
							<p className={styles.right}>
								Which is why our research is FREE for you!
							</p>
						</div>

						<div className={styles.row}>
							<div className={styles.left}>
								<span>Personalisation</span>
								<span>
									The morefertile® PFPs make it easier to get pregnant quickly,
									with clear guides on
								</span>
							</div>
							<p className={styles.right}>
								how to raise health and fertility with focused lifestyle changes
								and treatments.
							</p>
						</div>
						<div className={styles.row}>
							<div className={styles.left}>
								<span>Remote Access</span>
							</div>
							<p className={styles.right}>
								The tests we offer are usually only available from clinics. We
								deliver them to your home and provide support.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UniqueFeatures;
