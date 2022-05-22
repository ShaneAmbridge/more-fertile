import styles from "../../styles/posts.module.scss";
import Link from "next/link";
import Image from "next/image";

import { gql } from "@apollo/client";
import client from "../../apollo-client";
import LayoutMain from "../../components/Layout/layout";

const CategoryPost = ({ items, posts }) => {
  console.log(posts, "data");
  return (
    <LayoutMain items={items}>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Show the all post here</h1>

          <div className={styles.content}>
            <div className={styles.contentCards}>
              <div className={styles.cards}>
                {posts?.nodes.map((post, index) => (
                  <div key={index} className={styles.card}>
                    <Image
                      width="320px"
                      height="193px"
                      src={
                        post?.featuredImage
                          ? post?.featuredImage
                          : "/images/new/test.jpg"
                      }
                      alt=""
                    />
                    <div className={styles.infos}>
                      <div className={styles.titleAndDescription}>
                        {" "}
                        <h3>{post.title}</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post?.excerpt.slice(0, 200),
                          }}
                          className={styles.content}
                        ></div>
                      </div>

                      <div className={styles.button}>
                        <Link href={`/post/${post?.slug}`} passHref>
                          <button>Read more</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sidebar}>
              <aside>
                <h4>All Categories</h4>

                <ul>
                  {posts?.nodes.map((post) => (
                    <>
                      <Link
                        href={`/allpost/${post?.uri.split("/")[0]}`}
                        passHref
                      >
                        <li>{post?.slug}</li>
                      </Link>
                    </>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { category: "1" } }, { params: { category: "2" } }],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
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
                link
              }
            }
          }
        }
      }
    `,
    variables: {
      category: params?.category,
    },
  });
  console.log(data);
  return {
    props: { posts: data?.posts },
    revalidate: 1,
  };
}

export default CategoryPost;
