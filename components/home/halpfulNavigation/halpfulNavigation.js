import styles from "./hv.module.scss";
import Container from "../../container/container";
const HelpfulNavigation = () => {
	return (
		<div className={styles.main}>
			<Container>
				<div className={styles.top}>
					<h6 className={styles.left}>
						Helpful links to navigate morefertile®
					</h6>
					<div className={styles.right}>
						Need a Help?<div className={styles.arrow}>{">"}</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default HelpfulNavigation;
