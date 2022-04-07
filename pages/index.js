import LayoutMain from "../components/Layout/layout";
import styles from "../styles/Home.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Hero from "../components/home/hero";
export default function Home({ items }) {
	console.log(items);
	return (
		<LayoutMain items={items}>
			<Hero />
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
			}
		`,
	});

	return {
		props: { items: data },
	};
}
