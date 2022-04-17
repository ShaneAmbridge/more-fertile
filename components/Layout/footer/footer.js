import Container from "../../container/container";
import styles from "./footer.module.scss";
const Footer = () => {
	return (
		<div className={styles.main}>
			<Container>
				<div className={styles.flex}>
					<div className={styles.copyright}>Copyright © 2022 MoreFertile®.</div>
					<div className={styles.links}>
						<div className={styles.link}>Privacy Policy</div>
						<div className={styles.link}>Terms of Use</div>
						<div className={styles.link}>Do’s and Don’ts</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
