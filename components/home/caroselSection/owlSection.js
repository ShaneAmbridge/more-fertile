import styles from "./owlSection.module.scss";
import StarIcon from "./starIcon";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel2"), {
	ssr: false,
});
import "react-owl-carousel2/lib/styles.css";
dynamic(() => import("../../../loader.js"), {
	ssr: false,
});
import Image from "next/image";
const OwlSection = () => {
	const [notInServer, setNotInServer] = useState(false);
	useEffect(() => {
		if (typeof window !== undefined) {
			if (typeof $ !== undefined) {
				setNotInServer(true);
			}
		}
	}, []);
	const options = {
		items: 1,
		nav: false,
		rewind: true,
		autoplay: true,
		dots: true,
	};
	return (
		<div className={styles.main}>
			<Image layout='fill' src='/images/pregnent-women.png' />
			<div className={styles.containerwrapper}>
				<div className={styles.container}>
					<div className={styles.owlcontainer}>
						{notInServer ? (
							<OwlCarousel options={options}>
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
										“I have now come to the end of the 12 months of membership
										&amp; I have been very happy with the services provided.”
									</p>
									<div className={styles.authorinfo}>
										<h4>Mr Wagner</h4>
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
										“I have now come to the end of the 12 months of membership
										&amp; I have been very happy with the services provided.”
									</p>
									<div className={styles.authorinfo}>
										<h4>Mr Wagner</h4>
										<p>New York</p>
									</div>
								</div>
							</OwlCarousel>
						) : (
							<div></div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OwlSection;
