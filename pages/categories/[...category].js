import styles from "../../styles/posts.module.scss";
import Link from "next/link";
import Image from "next/image";

import { gql } from "@apollo/client";
import client from "../../apollo-client";
import LayoutMain from "../../components/Layout/layout";
import CategorySidebar from "../../components/Layout/categorySidebar/categorySidebar";

const CategoryPost = ({ items, data }) => {
  // console.log(data?.posts, "data");

  return (
    <LayoutMain items={items}>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Show the all post here</h1>

          <div className={styles.content}>
            <div className={styles.contentCards}>
              <div className={styles.cards}>
                {data.posts &&
                  data?.posts?.nodes.map((post, index) => {
                    // console.log(post, "post");
                    return (
                      <div key={index} className={styles.card}>
                        {post.featuredImage !== null ? (
                          <Image
                            width="320px"
                            height="193px"
                            src={post.featuredImage.node.mediaItemUrl}
                            alt=""
                          />
                        ) : (
                          <Image
                            width="320px"
                            height="193px"
                            src="/images/morefertile-logo.png"
                            alt=""
                          />
                        )}
                        <div className={styles.infos}>
                          <div className={styles.titleAndDescription}>
                            {" "}
                            <h3>{post.title}</h3>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt.slice(0, 150) + "...",
                              }}
                              className={styles.content}
                            ></div>
                          </div>

                          <div className={styles.button}>
                            <Link href={`/${post.uri}`} passHref>
                              <button>Read more</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <CategorySidebar categories={data?.categories} />
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { category: ["1"] } }, { params: { category: ["2"] } }],
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const category = params.category.join("/");
  const { data } = await client.query({
    query: gql`
      query allPosts($category: String) {
        posts(where: { categoryName: $category }) {
          nodes {
            excerpt
            link
            slug
            uri
            title

            categories {
              nodes {
                name
              }
            }

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
            uri
            name
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
      category: category,
    },
  });
  console.log(data, "category data");
  return {
    props: { data },
    revalidate: 1,
  };
}

export default CategoryPost;
