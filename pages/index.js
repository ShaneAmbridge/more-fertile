import LayoutMain from "../components/Layout/layout";
import styles from "../styles/Home.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Hero from "../components/home/hero";
import Container from "../components/container/container";
import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";
import MoreFertility from "../components/home/moreFertility/moreFertility";
import PremiumTestsAndProducts from "../components/home/premiumTestsAndProducts/premiumTestsAndProducts";
import YourFertility from "../components/home/yourFertility/YourFertility";
import BetterSystem from "../components/home/betterSystem/betterSystem";

// rm -rf node_modules && rm package-lock.json && npm i --legacy-peer-deps &&
export default function Home() {
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
		<LayoutMain>
			<Container>
				<Hero ww={ww} />

				<MoreFertility ww={ww} />
				<YourFertility ww={ww} />
				<BetterSystem ww={ww} />
				<PremiumTestsAndProducts ww={ww} />
			</Container>
		</LayoutMain>
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

// 				categories(where: { parent: 0 }) {
// 					nodes {
// 						id
// 						name
// 						children {
// 							nodes {
// 								name
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
