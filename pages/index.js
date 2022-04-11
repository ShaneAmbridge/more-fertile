import LayoutMain from "../components/Layout/layout";
import styles from "../styles/Home.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Hero from "../components/home/hero";
import Container from "../components/container/container";
import Missions from "../components/home/mission/mission";
import Points from "../components/home/points/points";
import Services from "../components/home/services/services";
import OwlSection from "../components/home/caroselSection/owlSection";
import Head from "next/head";
export default function Home({ items }) {
	return (
		<>
			<Head>
				<script
					src='https://code.jquery.com/jquery-3.6.0.min.js'
					integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
					crossOrigin='anonymous'
				></script>
			</Head>
			<Hero />
			<Container>
				<div className={styles.disAndRes}>
					<p>DISCOVER WHAT MOREFERTILE HAS TO OFFER</p>
					<p>RESOURCES</p>
				</div>
			</Container>
			<Missions />
			<Container>
				<div className={styles.titleAndDis}>
					<h1>Personal Fertility Profiles</h1>
					<p>
						Systems Biology technology measures the balance of morefertile® PFPs
						that regulate hormones, energy, immune state and fertility health
					</p>
				</div>
			</Container>
			<Points />
			<Services />
			<OwlSection />
		</>
	);
}
// export async function getStaticProps(context) {
// 	const { data } = await client.query({
// 		query: gql`
// 			query menuItems {
// 				menuItems(where: { parentId: "", location: PRIMARY }) {
// 					nodes {
// 						locations
// 						label
// 						parentId
// 						childItems {
// 							nodes {
// 								label
// 								path
// 							}
// 						}
// 					}
// 				}
// 			}
// 		`,
// 	});

// 	return {
// 		props: { items: data },
// 	};
// }
