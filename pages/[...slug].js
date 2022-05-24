import LayoutMain from "../components/Layout/layout";
import styles from "../styles/post.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Image from "next/image";

import React, { useLayoutEffect, useState, useEffect } from "react";

import CategorySidebar from "../components/Layout/categorySidebar/categorySidebar";

export default function Home({ data, items, postOrTree }) {
  console.log(data, "data");
  const breadcamp = data?.posts?.nodes[0]?.uri.split("/");
  // console.log(data?.posts?.nodes[0]?.uri, "breadcamp", typeof breadcamp);

  return (
    <LayoutMain items={items}>
      {postOrTree === "tree" && (
        <div className={styles.timelineContainer}>
          <h1 className={`${styles.levelOne} ${styles.rectangle}`}>
            {data?.categories?.nodes[0].name}
          </h1>
          <ol className={styles.levelTwoWrapper}>
            {data?.categories?.nodes[0].children.nodes.map((category, i) => {
              return (
                <li key={i + "lk,k;"}>
                  <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
                    1 {category.name}
                  </h2>
                  <ol className={styles.levelThreeWrapper}>
                    {category.children.nodes.map((subCategory, j) => {
                      return (
                        <li key={j + "asdfasdfsadf"}>
                          <h3
                            className={`${styles.levelThree} ${styles.rectangle}`}
                          >
                            2 {subCategory.name}
                          </h3>
                        </li>
                      );
                    })}
                  </ol>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {postOrTree === "post" && (
        <div className={styles.main}>
          <div className={styles.container}>
            <p className={styles.breadcrumb}>{breadcamp && breadcamp[1]}</p>
            <h1 className={styles.title}>{data?.posts?.nodes[0]?.title}</h1>

            {data?.posts?.nodes[0]?.featuredImage !== null &&
              data?.posts?.nodes[0]?.featuredImage && (
                <div className={styles.heroImageContainer}>
                  <Image
                    layout="responsive"
                    width={1024}
                    height={487}
                    src={
                      data?.posts?.nodes[0]?.featuredImage?.node.mediaItemUrl
                    }
                    alt={data?.posts?.nodes[0]?.featuredImage?.node.altText}
                  />
                </div>
              )}

            <div className={styles.contentandSidebar}>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.posts?.nodes[0]?.content,
                }}
                className={styles.content}
              ></div>

              <div className={styles.sidebar}>
                <CategorySidebar categories={data?.categories} />
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutMain>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["4", "5", "6"] } },
      { params: { slug: ["1", "2", "3"] } },
    ],
    fallback: "blocking", // false or 'blocking'
  };
}
export async function getStaticProps({ params }) {
  const name = params.slug[params.slug.length - 1];
  const parentName = params.slug[0];
  console.log(typeof parentName);
  const postOrTree =
    params.slug.length > 0 && params.slug.length < 2 ? "tree" : "post";
  const { data } =
    params.slug.length > 0 && params.slug.length < 2
      ? await client.query({
          query: gql`
            query treeData($parentName: [String]) {
              categories(where: { parent: 0, name: $parentName }) {
                nodes {
                  id
                  name
                  uri
                  children {
                    nodes {
                      name
                      uri
                      children {
                        nodes {
                          name
                          uri
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            parentName: parentName,
          },
        })
      : await client.query({
          query: gql`
            query post($name: String) {
              posts(where: { name: $name }) {
                nodes {
                  content
                  title
                  uri
                  featuredImage {
                    node {
                      altText
                      mediaItemUrl
                    }
                  }
                }
              }

              categories(first: 50) {
                nodes {
                  name
                  uri
                  children {
                    nodes {
                      uri
                      name
                      children {
                        nodes {
                          uri
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            name: name,
          },
        });

  // console.log(postOrTree, "postOrTree");
  return {
    props: { postOrTree: postOrTree, data },

    revalidate: 1,
  };
}
