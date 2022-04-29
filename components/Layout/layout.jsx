import { useState } from "react";
import BigMenu from "./bigmenu/bigmenu";
import Footer from "./footer/footer";
import styles from "./layout.module.scss";
import Nav from "./nav/nav";
import TopBar from "./top-bar/top-bar";
const LayoutMain = ({ active, children, items }) => {
	const [bigmenuOpen, setBigmenuopen] = useState(false);
	console.log(items?.categories);
	return (
		<div className={styles.main}>
			<TopBar />
			<Nav
				setBigmenuopen={setBigmenuopen}
				bigmenuOpen={bigmenuOpen}
				items={items}
			/>
			<div className={styles.border}>
				{bigmenuOpen && <div className={styles.line}></div>}
			</div>
			{bigmenuOpen && <BigMenu categories={items?.categories} />}
			{children}
			<Footer />
		</div>
	);
};

export default LayoutMain;
