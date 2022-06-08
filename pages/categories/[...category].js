import styles from "../../styles/categories.module.scss";
import Link from "next/link";
import Image from "next/image";

import { gql } from "@apollo/client";
import client from "../../apollo-client";
import LayoutMain from "../../components/Layout/layout";
import CategorySidebar from "../../components/Layout/categorySidebar/categorySidebar";
import { useRouter } from "next/router";

const CategoryPost = ({ items, data, singlePost }) => {
  const router = useRouter();

  console.log(data, "data");

  const path = router.query.category;
  const pathPrefix = path.join("/");

  return (
    <LayoutMain items={items}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contentWrapper}>
              {singlePost?.data?.posts?.nodes.length > 0 && (
                <div className={styles.categoryContent}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: singlePost?.data?.posts?.nodes[0]?.content,
                    }}
                    className={styles.content}
                  ></div>
                </div>
              )}
              <h1 className={styles.title}>
                <span>{path[path.length - 1]}</span> Related Posts
              </h1>
              <div className={styles.contentCards}>
                {data.posts.nodes.length > 0 ? (
                  <div className={styles.cards}>
                    {data.posts.nodes &&
                      data?.posts?.nodes.map((post, index) => {
                        // console.log(post, "post");
                        return (
                          <div key={index} className={styles.card}>
                            {post.featuredImage !== null ? (
                              <Image
                                width="320px"
                                height="193px"
                                src={post.featuredImage.node.mediaItemUrl}
                                alt={post.featuredImage.node.altText}
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
                                <Link
                                  href={`/${pathPrefix}/${post.slug}`}
                                  passHref
                                >
                                  <a>
                                    <button>Read more</button>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                ) : (
                  <div className={styles.noPostFound}>
                    <h1>No posts found.</h1>
                  </div>
                )}
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
  // const category = params.category.join("/");
  const slug = params.category[params.category.length - 1];
  const { data } = await client.query({
    query: gql`
      query allPosts($category: String, $slug: [String]) {
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
                slug
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

        categories(where: { slug: $slug }) {
          nodes {
            name
            uri
            slug
            posts {
              nodes {
                title
                uri
                slug
              }
            }
            children {
              nodes {
                name
                uri
                slug
                posts {
                  nodes {
                    title
                    uri
                    slug
                  }
                }
                children {
                  nodes {
                    name
                    uri
                    slug
                    posts {
                      nodes {
                        title
                        uri
                        slug
                      }
                    }

                    children {
                      nodes {
                        name
                        uri
                        slug
                        posts {
                          nodes {
                            title
                            uri
                            slug
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      category: slug,
      slug: params.category[1],
    },
  });

  const singlePost = await client.query({
    query: gql`
      query singlePosts($name: String) {
        posts(where: { name: $name }) {
          nodes {
            content
            title
            uri
            slug
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    `,
    variables: {
      name: slug,
    },
  });
  console.log(singlePost, "category data");
  return {
    props: { data, singlePost },
    revalidate: 1,
  };
}

export default CategoryPost;
