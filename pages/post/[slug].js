import LayoutMain from "../../components/Layout/layout";
import styles from "../../styles/post.module.scss";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Image from "next/image";

import React, { useLayoutEffect, useState, useEffect } from "react";
import Sidebar from "../../components/Layout/sidebar/sidebar";

export default function Home({ post, items }) {
  console.log(post);

  return (
    <LayoutMain items={items}>
      <div className={styles.timelineContainer}>
        <h1 className={`${styles.levelOne} ${styles.rectangle}`}>
          Fertility Health
        </h1>
        <ol className={styles.levelTwoWrapper}>
          <li>
            <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>
              Lifestyle
            </h2>
            <ol className={styles.levelThreeWrapper}>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  Factors
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Age and Fertility
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      {" "}
                      Emotions
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      {" "}
                      Exercise
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Microbiome
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Weight
                    </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  Substances
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Alcohol
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Caffeine
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Diet and Fertility
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Drugs
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Smoking
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      {" "}
                      Supplements
                    </h4>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h2 className={`${styles.levelTwo} ${styles.rectangle}`}>Health</h2>
            <ol className={styles.levelThreeWrapper}>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  Female
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Eggs & Organs
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Hormones
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Get Pregnant
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Pregnancy
                    </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.levelThree} ${styles.rectangle}`}>
                  Male
                </h3>
                <ol className={styles.levelFourWrapper}>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Semen & Organs
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Changing Fertility
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Semen Sampling
                    </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.levelFour} ${styles.rectangle}`}>
                      Sperm Tests
                    </h4>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.breadcrumb}>{post?.uri.split("/")}</p>
          <h1 className={styles.title}>{post?.title}</h1>
          {post?.featuredImage ? (
            <div className={styles.heroImageContainer}>
              <Image
                src={post?.featuredImage}
                layout="responsive"
                width={1024}
                height={487}
                alt=""
              />
            </div>
          ) : (
            <div className={styles.heroImageContainer}>
              <Image
                src="/demo.png"
                layout="responsive"
                width={1024}
                height={487}
                alt=""
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
  console.log(params.slug);
  const { data } = await client.query({
    query: gql`
      query post($slug: String) {
        postBy(slug: $slug) {
          content
          title
          uri
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
