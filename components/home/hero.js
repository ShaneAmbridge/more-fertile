import styles from "./hero.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
const Hero = () => {
	const [size, setSize] = useState(0);
	const [ww, setWw] = useState(0);
	useLayoutEffect(() => {
		function updateSize() {
			setSize(window.innerWidth);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	useEffect(() => {
		setWw(size);
	}, [size]);

	return (
		<div className={styles.main}>
			<div className={styles.image}>
				{ww < 601 && (
					<Image
						style={{ width: "100%", height: "100%" }}
						layout='fill'
						src='/images/new/homeHeroMobaile.png'
					/>
				)}
				{ww > 600 && (
					<Image
						style={{ width: "100%", height: "100%" }}
						layout='fill'
						src='/images/new/homeHome.png'
					/>
				)}
			</div>
			<div className={styles.containerwrapper}>
				<div className={styles.container}>
					<div className={styles.title}>
						Natural,
						<br /> ground-breaking <span>fertility support</span>
					</div>
					<p className={styles.discription}>
						Comprehensive fertility information and products
					</p>
					<div className={styles.buttons}>
						<button className={styles.button}>
							Start your fertility journey
						</button>
						<button className={styles.buttonOutlined}>Find out more</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
