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
import React, { useLayoutEffect, useState, useEffect } from "react";
import Features from "../components/home/features/features";
import HelpfulNavigation from "../components/home/halpfulNavigation/halpfulNavigation";
import UniqueFeatures from "../components/home/whatMakesUnique/whatMakesUnique";
import QuickLinks from "../components/home/quickLinks/quickLinks";
// rm -rf node_modules && rm package-lock.json && npm i --legacy-peer-deps &&
export default function Home({ items }) {
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
		<LayoutMain items={items}>
			<Hero ww={ww} />
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
			<Points ww={ww} />
			<Services />
			<OwlSection ww={ww} />
			<Features ww={ww} />
			<HelpfulNavigation />
			<UniqueFeatures ww={ww} />
			<QuickLinks />
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
