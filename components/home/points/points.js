import styles from "./points.module.scss";
import Image from "next/image";
const Points = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.containerwrapper}>
					<Image layout='fill' src='/images/writing.png' />
					<div className={styles.points}>
						<h2>MAXIMISE your chances of pregnancy with personalised:</h2>
						<p>
							1. Diets.
							<br />
							2. Lifestyle changes.
							<br />
							3. Test suggestions.
							<br />
							4. Stress reduction.
							<br />
							5. Treatment options.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Points;
