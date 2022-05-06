import styles from "./container.module.scss";
const Container2 = ({ children }) => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default Container2;
