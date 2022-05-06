import styles from "./hv.module.scss";
import Container from "../../container/container";
import Image from "next/image";
const HelpfulNavigation = () => {
	return (
		<div className={styles.main}>
			<Container>
				<div className={styles.top}>
					<h6 className={styles.left}>
						Helpful links to navigate morefertile®
					</h6>
					<div className={styles.right}>
						<span>Need a Help?</span>
						<div className={styles.arrow}>{">"}</div>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.card}>
						<div className={styles.upperSection}>
							<img src='/images/i.svg' />
							<h3>Fertility Information</h3>
						</div>
						<div className={styles.lowerSection}>
							<p>
								FREE fertility resources to explain the norm, conditions,
								treatments and self-help
							</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.upperSection}>
							<img src='/images/flower.png' width='64px' height='38px' />
							<h3>Fertility Profiles</h3>
						</div>
						<div className={styles.lowerSection}>
							<p>
								Backed by <br /> Systems Biology technology: Discover your PFP
							</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.upperSection}>
							<img src='/images/tube.svg' />
							<h3>Fertility Testing</h3>
						</div>
						<div className={styles.lowerSection}>
							<p>
								Functional health tests
								<br />
								to help you get <br />
								pregnant.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default HelpfulNavigation;
