import Link from "next/link";
import styles from "./top-bar.module.scss";

const TopBar = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.left}>Hello and Welcome to Morefertile!</div>
				<div className={styles.right}>
					<Link href={"#"}>
						<a>
							<div style={{ border: "none" }} className={styles.link}>
								FOR PROFESSIONALS
							</div>
						</a>
					</Link>
					<Link href={"#"}>
						<a>
							<div className={styles.link}>FOR PROFESSIONALS</div>
						</a>
					</Link>
					<Link href={"#"}>
						<a>
							<div className={styles.link}>FOR PROFESSIONALS</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
