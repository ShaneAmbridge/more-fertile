import styles from "./quickLinks.module.scss";
import Container from "../../container/container";
const QuickLinks = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<h6 className={styles.heading}>
					QUICK LINKS TO THE INFORMATION AND RESOURCES YOU NEED.
				</h6>
				<div className={styles.links}>
					<div className={styles.maleLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='18'
							width='18'
							viewBox='0 0 32 32'
						>
							<title>cheque 3</title>
							<g
								strokeLinecap='square'
								strokeWidth='2'
								fill='none'
								stroke='#ffffff'
								strokeLinejoin='miter'
								class='nc-icon-wrapper'
								strokeMiterlimit='10'
							>
								<line x1='15' y1='7' x2='25' y2='7' stroke='#ffffff'></line>
								<line x1='15' y1='13' x2='25' y2='13' stroke='#ffffff'></line>
								<line x1='15' y1='19' x2='25' y2='19' stroke='#ffffff'></line>
								<path
									dataCap='butt'
									d='M19,28c0-1.657,1.343-3,3-3H4 c-1.657,0-3,1.343-3,3v3h18V28z'
									strokeLinecap='butt'
								></path>
								<path
									dataCap='butt'
									d='M22,25c1.657,0,3,1.343,3,3 s1.343,3,3,3s3-1.343,3-3V1.032H9V25'
									strokeLinecap='butt'
								></path>
							</g>
						</svg>
						<span>Male PFPs</span>
						<span className={styles.arrow}>
							<svg
								height='22'
								width='22'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<g fill='#ffffff'>
									<path d='M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z' />
								</g>
							</svg>
						</span>
					</div>
					<div className={styles.maleLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='18'
							width='18'
							viewBox='0 0 32 32'
						>
							<title>event create 1</title>
							<g
								strokeLinecap='square'
								strokeWidth='2'
								fill='none'
								stroke='#ffffff'
								strokeLinejoin='miter'
								class='nc-icon-wrapper'
								strokeMiterlimit='10'
							>
								<circle cx='23' cy='24' r='7' stroke='#ffffff'></circle>
								<line x1='23' y1='21' x2='23' y2='27' stroke='#ffffff'></line>
								<line x1='20' y1='24' x2='26' y2='24' stroke='#ffffff'></line>
								<line x1='9' y1='1' x2='9' y2='5'></line>
								<line x1='23' y1='1' x2='23' y2='5'></line>
								<line
									dataCap='butt'
									x1='31'
									y1='11'
									x2='1'
									y2='11'
									strokeLinecap='butt'
								></line>
								<polyline points='12 29 1 29 1 5 31 5 31 15'></polyline>
							</g>
						</svg>
						<span>Male Health</span>
						<span className={styles.arrow}>
							<svg
								height='22'
								width='22'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<g fill='#ffffff'>
									<path d='M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z' />
								</g>
							</svg>
						</span>
					</div>
					<div className={styles.maleLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='18'
							width='18'
							viewBox='0 0 32 32'
						>
							<title>square pin</title>
							<g
								strokeLinecap='square'
								strokeWidth='2'
								fill='none'
								stroke='#ffffff'
								strokeLinejoin='miter'
								class='nc-icon-wrapper'
								strokeMiterlimit='10'
							>
								<polyline
									dataCap='butt'
									points='12.546,23 7,23 2,31 30,31 25,23 19.454,23 '
									strokeLinecap='butt'
									stroke='#ffffff'
								></polyline>
								<path d='M26,10.582 C26,16.473,16,27,16,27S6,16.473,6,10.582c0-6.04,5.168-9.545,10-9.545S26,4.541,26,10.582z'></path>
								<circle cx='16' cy='11.036' r='3'></circle>
							</g>
						</svg>
						<span>Male Conditions</span>
						<span className={styles.arrow}>
							<svg
								height='22'
								width='22'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<g fill='#ffffff'>
									<path d='M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z' />
								</g>
							</svg>
						</span>
					</div>
					<div className={styles.maleLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='18'
							width='18'
							viewBox='0 0 32 32'
						>
							<title>stethoscope</title>
							<g
								strokeLinecap='square'
								strokeWidth='2'
								fill='none'
								stroke='#ffffff'
								strokeLinejoin='miter'
								class='nc-icon-wrapper'
								strokeMiterlimit='10'
							>
								<polyline
									points=' 10,21 10,31 27,31 27,23 '
									stroke='#ffffff'
								></polyline>
								<circle cx='27' cy='19' r='4' stroke='#ffffff'></circle>
								<path d='M15,2h3.8 c0.6,0,1.1,0.5,1,1.2l-2.6,16.2c-0.2,1-1,1.7-2,1.7H5.7c-1,0-1.8-0.7-2-1.7L1.2,3.2C1.1,2.5,1.6,2,2.2,2H6'></path>
								<line x1='6' y1='1' x2='6' y2='4'></line>
								<line x1='15' y1='1' x2='15' y2='4'></line>
							</g>
						</svg>
						<span>Male Treatments</span>
						<span className={styles.arrow}>
							<svg
								height='22'
								width='22'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<g fill='#ffffff'>
									<path d='M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z' />
								</g>
							</svg>
						</span>
					</div>
				</div>
				<div className={styles.links}>
					<div className={styles.femaleLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='18'
							width='18'
							viewBox='0 0 32 32'
						>
							<title>cheque 3</title>
							<g
								strokeLinecap='square'
								strokeWidth='2'
								fill='none'
								stroke='#ffffff'
								strokeLinejoin='miter'
								class='nc-icon-wrapper'
								strokeMiterlimit='10'
							>
								<line x1='15' y1='7' x2='25' y2='7' stroke='#ffffff'></line>
								<line x1='15' y1='13' x2='25' y2='13' stroke='#ffffff'></line>
								<line x1='15' y1='19' x2='25' y2='19' stroke='#ffffff'></line>
								<path
									dataCap='butt'
									d='M19,28c0-1.657,1.343-3,3-3H4 c-1.657,0-3,1.343-3,3v3h18V28z'
									strokeLinecap='butt'
								></path>
								<path
									dataCap='butt'
									d='M22,25c1.657,0,3,1.343,3,3 s1.343,3,3,3s3-1.343,3-3V1.032H9V25'
									strokeLinecap='butt'
								></path>
							</g>
						</svg>
						<span>Female PFPs</span>
						<span className={styles.arrow}>
							<svg
								height='22'
								width='22'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<g fill='#ffffff'>
									<path d='M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z' />
								</g>
							</svg>
						</span>
					</div>
					<div className={styles.femaleLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='18'
							width='18'
							viewBox='0 0 32 32'
						>
							<title>event create 1</title>
							<g
								strokeLinecap='square'
								strokeWidth='2'
								fill='none'
								stroke='#ffffff'
								strokeLinejoin='miter'
								class='nc-icon-wrapper'
								strokeMiterlimit='10'
							>
								<circle cx='23' cy='24' r='7' stroke='#ffffff'></circle>
								<line x1='23' y1='21' x2='23' y2='27' stroke='#ffffff'></line>
								<line x1='20' y1='24' x2='26' y2='24' stroke='#ffffff'></line>
								<line x1='9' y1='1' x2='9' y2='5'></line>
								<line x1='23' y1='1' x2='23' y2='5'></line>
								<line
									dataCap='butt'
									x1='31'
									y1='11'
									x2='1'
									y2='11'
									strokeLinecap='butt'
								></line>
								<polyline points='12 29 1 29 1 5 31 5 31 15'></polyline>
							</g>
						</svg>
						<span>Female Health</span>
						<span className={styles.arrow}>
							<svg
								height='22'
								width='22'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<g fill='#ffffff'>
									<path d='M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z' />
								</g>
							</svg>
						</span>
					</div>
					<div className={styles.femaleLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='18'
							width='18'
							viewBox='0 0 32 32'
						>
							<title>square pin</title>
							<g
								strokeLinecap='square'
								strokeWidth='2'
								fill='none'
								stroke='#ffffff'
								strokeLinejoin='miter'
								class='nc-icon-wrapper'
								strokeMiterlimit='10'
							>
								<polyline
									dataCap='butt'
									points='12.546,23 7,23 2,31 30,31 25,23 19.454,23 '
									strokeLinecap='butt'
									stroke='#ffffff'
								></polyline>
								<path d='M26,10.582 C26,16.473,16,27,16,27S6,16.473,6,10.582c0-6.04,5.168-9.545,10-9.545S26,4.541,26,10.582z'></path>
								<circle cx='16' cy='11.036' r='3'></circle>
							</g>
						</svg>
						<span>Female Conditions</span>
						<span className={styles.arrow}>
							<svg
								height='22'
								width='22'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<g fill='#ffffff'>
									<path d='M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z' />
								</g>
							</svg>
						</span>
					</div>
					<div className={styles.femaleLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='18'
							width='18'
							viewBox='0 0 32 32'
						>
							<title>stethoscope</title>
							<g
								strokeLinecap='square'
								strokeWidth='2'
								fill='none'
								stroke='#ffffff'
								strokeLinejoin='miter'
								class='nc-icon-wrapper'
								strokeMiterlimit='10'
							>
								<polyline
									points=' 10,21 10,31 27,31 27,23 '
									stroke='#ffffff'
								></polyline>
								<circle cx='27' cy='19' r='4' stroke='#ffffff'></circle>
								<path d='M15,2h3.8 c0.6,0,1.1,0.5,1,1.2l-2.6,16.2c-0.2,1-1,1.7-2,1.7H5.7c-1,0-1.8-0.7-2-1.7L1.2,3.2C1.1,2.5,1.6,2,2.2,2H6'></path>
								<line x1='6' y1='1' x2='6' y2='4'></line>
								<line x1='15' y1='1' x2='15' y2='4'></line>
							</g>
						</svg>
						<span>Female Treatments</span>
						<span className={styles.arrow}>
							<svg
								height='22'
								width='22'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<g fill='#ffffff'>
									<path d='M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z' />
								</g>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuickLinks;
