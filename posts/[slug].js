import LayoutMain from "../components/Layout/layout";
import styles from "../../styles/post.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import React, { useLayoutEffect, useState, useEffect } from "react";
import Sidebar from "../components/Layout/sidebar/sidebar";

export default function Home({ post, items }) {
	return (
		<LayoutMain items={items}>
			<div className={styles.main}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.contentandSidebar}>
					<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
					<Sidebar />
				</div>
			</div>
		</LayoutMain>
	);
}
export async function getStaticProps(context) {
	const { data } = await client.query({
		query: gql`
			query post {
				posts(where: { title: "Male Hot" }) {
					nodes {
						title
						slug
						content
					}
				}
			}
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
		props: { post: data?.post?.nodes[0], items: res.data },
		revalidate: 1,
	};
}
