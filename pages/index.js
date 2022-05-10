import LayoutMain from "../components/Layout/layout";
import styles from "../styles/Home.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Hero from "../components/home/hero";
import Container from "../components/container/container";

import React from "react";
import MoreFertility from "../components/home/moreFertility/moreFertility";
import PremiumTestsAndProducts from "../components/home/premiumTestsAndProducts/premiumTestsAndProducts";
import YourFertility from "../components/home/yourFertility/YourFertility";
import BetterSystem from "../components/home/betterSystem/betterSystem";

// rm -rf node_modules && rm package-lock.json && npm i --legacy-peer-deps &&
export default function Home({ items }) {
	return (
		<LayoutMain items={items}>
			<Container>
				<Hero />
			</Container>
			<MoreFertility />
			<YourFertility />
			<BetterSystem />
			<PremiumTestsAndProducts />
		</LayoutMain>
	);
}
export async function getStaticProps(context) {
	const { data } = await client.query({
		query: gql`
			query menuItems {
				menuItems(where: { parentId: "", location: PRIMARY }) {
					nodes {
						locations
						label
						parentId
						childItems {
							nodes {
								label
								path
							}
						}
					}
				}

				categories(where: { parent: 0 }) {
					nodes {
						id
						name
						children {
							nodes {
								name
							}
						}
					}
				}
			}
		`,
	});

	return {
		props: { items: data },
	};
}
