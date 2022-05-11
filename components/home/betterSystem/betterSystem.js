import styles from "./betterSystem.module.scss";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
const BetterSystem = ({ ww }) => {
	const imageRef = useRef();

	const [isImgVisible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (ww < 800) {
				if (entries[0].isIntersecting) {
					setVisible(true);

					observer.unobserve(imageRef.current);
				}
			} else {
				setVisible(true);
			}
		});

		observer.observe(imageRef.current);

		return () => observer.unobserve(imageRef.current);
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.titleAndAction}>
					<div className={styles.titles}>
						<h2 className={styles.title}>
							Better <span>System.</span>
						</h2>
						<h2 className={styles.title}>
							Better <span style={{ color: "#563CA5" }}>Balance.</span>
						</h2>
						<h2 className={styles.title}>
							Better <span>Health.</span>
						</h2>
					</div>
					<div className={styles.description}>
						Systems biology uses algorithms to measure body system balance in a
						holistic “real-life” forecast. We measure six Systems key to
						fertility health.​
					</div>
					<button className={styles.button}>Find out more</button>
				</div>
				<div className={styles.imageContainer}>
					<div
						ref={imageRef}
						className={isImgVisible ? styles.imageToTop : styles.image}
					>
						<Image
							width='624px'
							height='404px'
							src='/images/new/betterSystem.png'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BetterSystem;
