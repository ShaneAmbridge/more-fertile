import styles from "./moreFertility.module.scss";
import Image from "next/image";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
const MoreFertility = () => {
	const domRef = useRef();

	const [isImgVisible, setVisible] = useState(false);
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
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setVisible(true);

				observer.unobserve(domRef.current);
			}
		});

		observer.observe(domRef.current);

		return () => observer.unobserve(domRef.current);
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.titleAndAction}>
					<div className={styles.titles}>
						<h2 className={styles.title}>
							More <span>Natural.</span>
						</h2>
						<h2 className={styles.title}>
							More <span style={{ color: "#7F2F75" }}>Fertile.</span>
						</h2>
						<h2 className={styles.title}>
							More <span>You.</span>
						</h2>
					</div>
					<div className={styles.description}>
						We provide ground-breaking, natural solutions to help you navigate
						your Fertility Journey successfully. ​
					</div>
					<button className={styles.button}>Find out more</button>
				</div>
				<div className={styles.imageContainer}>
					<div
						ref={domRef}
						className={isImgVisible ? styles.imageToTop : styles.image}
					>
						<Image
							width='624px'
							height='404px'
							src='/images/new/moreNatural.png'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoreFertility;
