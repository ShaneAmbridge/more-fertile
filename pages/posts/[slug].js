import LayoutMain from "../../components/Layout/layout";
import styles from "./posts.module.scss";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Image from "next/image";

import React, { useLayoutEffect, useState, useEffect } from "react";
import Sidebar from "../../components/Layout/sidebar/sidebar";

export default function Home({ post, items }) {
  console.log(post);
  return (
    <LayoutMain items={items}>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{post?.title}</h1>
          {!post?.featuredImage && (
            <div className={styles.heroImageContainer}>
              <Image
                src="/demo.png"
                layout="responsive"
                width={1024}
                height={487}
              />
            </div>
          )}
          <div className={styles.contentandSidebar}>
            <div
              dangerouslySetInnerHTML={{ __html: post?.content }}
              className={styles.content}
            ></div>

            <Sidebar />
          </div>
        </div>
      </div>
    </LayoutMain>
  );
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query post($slug: String) {
        postBy(slug: $slug) {
          content
          title

          featuredImage {
            node {
              link
            }
          }
        }
      }
    `,
    variables: {
      slug: params?.slug,
    },
  });
  console.log(data);
  return {
    props: { post: data?.postBy },
    revalidate: 1,
  };
}
