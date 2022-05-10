import styles from "./premiumTestAndProducts.module.scss";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
const PremiumTestsAndProducts = () => {
	const domRef = useRef();

	const [isVisible, setVisible] = useState(false);

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
				<h1 className={styles.title}>
					<span>Premium</span>
					<br /> Tests & Products
				</h1>
				<div
					ref={domRef}
					className={isVisible ? styles.cards : styles.cardsHidden}
				>
					<div className={styles.card1}>
						<Image width='320px' height='193px' src='/images/new/card1.png' />
						<div className={styles.infos}>
							<div className={styles.titleAndDescription}>
								{" "}
								<h3>
									Functional <br /> Medicine Tests
								</h3>
								<p>
									Get access to “functional medicine” tests to assess your needs
									that are usually only available from clinics.
								</p>
							</div>
							<button>Find out more</button>
						</div>
					</div>
					<div className={styles.card2}>
						<Image width='320px' height='193px' src='/images/new/card2.png' />
						<div className={styles.infos}>
							<div className={styles.titleAndDescription}>
								<h3>
									Natural
									<br /> Supplements
								</h3>
								<p>
									“Foodstate” supplements are the most natural available. All
									our products support the tests we offer.
								</p>
							</div>
							<button>Find out more</button>
						</div>
					</div>
					<div className={styles.card3}>
						<Image width='320px' height='193px' src='/images/new/card3.png' />
						<div className={styles.infos}>
							<div className={styles.titleAndDescription}>
								<h3>
									Herbal <br /> Medicine
								</h3>
								<p>
									Herbs can dramatically improve pregnancy rates and sperm
									health.
								</p>
							</div>
							<button>Find out more</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PremiumTestsAndProducts;
