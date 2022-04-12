import styles from "./owlSection.module.scss";
import StarIcon from "./starIcon";
import React, { useLayoutEffect, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const OwlSection = () => {
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
			<Image layout='fill' src='/images/pregnent-women.png' />
			<div className={styles.containerwrapper}>
				<div className={styles.container}>
					<div className={styles.owlcontainer}>
						<Carousel
							width={ww < 650 ? "310px" : "550px"}
							autoPlay={true}
							showArrows={false}
							showStatus={false}
							infiniteLoop={true}
						>
							<div className={styles.item}>
								<div className={styles.stars}>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
								</div>
								<p className={styles.text}>
									Bringing ground-breaking fertility support to professionals
									and the public.
								</p>
								<div className={styles.authorinfo}></div>
							</div>

							<div className={styles.item}>
								<div className={styles.stars}>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
								</div>
								<p className={styles.text}>
									“As always, Alyssa was great. I love her as my provider. I
									have been going to for about a year now and will only see
									her.”
								</p>
								<div className={styles.authorinfo}>
									<h4>Mrs Linda</h4>
									<p>London, Uk</p>
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.stars}>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
								</div>
								<p className={styles.text}>
									“I have now come to the end of the 12 months of membership & I
									have been very happy with the services provided.”
								</p>
								<div className={styles.authorinfo}>
									<h4>Mr Wanger</h4>
									<p>New York</p>
								</div>
							</div>
							<div className={styles.item}>
								<div className={styles.stars}>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
									<div className={styles.star}>
										<StarIcon />
									</div>
								</div>
								<p className={styles.text}>
									“This was my first consultation, Alaa was exceedingly
									professional and and gave the best possible consultation.”
								</p>
								<div className={styles.authorinfo}>
									<h4>Shakira</h4>
									<p>London</p>
								</div>
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OwlSection;
