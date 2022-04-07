import styles from "./layout.module.scss";
import Nav from "./nav/nav";
import TopBar from "./top-bar/top-bar";
const LayoutMain = ({ active, children, items }) => {
	return (
		<div className={styles.main}>
			<TopBar />
			<Nav items={items} />
			{children}
		</div>
	);
};

export default LayoutMain;
