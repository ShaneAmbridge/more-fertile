import styles from "./container.module.scss";
const Container = ({ children }) => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default Container;
