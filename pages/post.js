import LayoutMain from "../components/Layout/layout";
import styles from "../styles/Home.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import React, { useLayoutEffect, useState, useEffect } from "react";

export default function Home({ post, items }) {
	return (
		<LayoutMain items={items}>
			<h1 className={styles.title}>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
		</LayoutMain>
	);
}
export async function getStaticProps(context) {
	const { data } = await client.query({
		query: gql`
			query menuItems {
				posts(where: { title: "Male Hot" }) {
					nodes {
						title
						slug
						content
					}
				}
			}
		`,
	});
	const res = await client.query({
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
		props: { post: data?.posts?.nodes[0], items: res.data },
		revalidate: 1,
	};
}
