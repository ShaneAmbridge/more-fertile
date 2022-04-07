import Image from "next/image";
import { useState } from "react";
import styles from "./nav.module.scss";
import SearchIcon from "./searchIcon";
const Nav = ({ items }) => {
	const [searchbox, setSearchBox] = useState(false);

	return (
		<div className={styles.main}>
			<div className={styles.logo}>
				<Image src={"/images/cropped-logo_button.png"} width={92} height={40} />
			</div>
			<div className={styles.menu}>
				<div className={styles.resources}>
					<span>Resources</span>
				</div>
				{items?.menuItems?.nodes.map((item, i) => {
					return (
						<div key={i + "hg"} className={styles.item}>
							<span>{item.label}</span>
							{item?.childItems?.nodes.length > 0 && (
								<img src='/images/down.png' />
							)}
							{item?.childItems?.nodes.length > 0 && (
								<div className={styles.submenu}>
									{item?.childItems?.nodes.map((subitem, j) => {
										console.log("render");
										return (
											<div key={j + "kj"} className={styles.submenuItem}>
												{subitem.label}
											</div>
										);
									})}
								</div>
							)}
						</div>
					);
				})}
			</div>
			<div className={styles.searchBar}>
				<input
					style={
						searchbox
							? { flexGrow: 1, visibility: "visible" }
							: { flexGrow: 0, visibility: "hidden" }
					}
					className={styles.searchBox}
				/>
				<div onClick={() => setSearchBox(true)} className={styles.icon}>
					<SearchIcon />
				</div>
			</div>
		</div>
	);
};

export default Nav;
