import styles from "../../styles/posts.module.scss";
import Image from "next/image";
import LayoutMain from "../../components/Layout/layout";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Link from "next/link";

const Posts = ({ items, post }) => {
  console.log(post?.nodes, "data");
  return (
    <LayoutMain items={items}>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Show the all post here</h1>

          <div className={styles.content}>
            <div className={styles.contentCards}>
              <div className={styles.cards}>
                {post?.nodes.map((item, index) => {
                  const source =
                    typeof item.featuredImage === "string"
                      ? item.featuredImage
                      : "/demo.png";
                  return (
                    <div key={index} className={styles.card}>
                      <Image width="320px" height="193px" src={source} alt="" />
                      <div className={styles.infos}>
                        <div className={styles.titleAndDescription}>
                          {" "}
                          <h3>{item.title}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.excerpt.slice(0, 200),
                            }}
                            className={styles.content}
                          ></div>
                        </div>

                        <div className={styles.button}>
                          <Link href={`/post/${item?.slug}`} passHref>
                            <button>Read more</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.sidebar}>
              <aside>
                <h4>All Categories</h4>

                <ul>
                  <li>Man Hot</li>
                  <li>Endometriosis</li>
                  <li>Female Age</li>
                  <li>Fallopian Tube Blockages</li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query allPosts {
        posts(first: 100) {
          nodes {
            excerpt
            link
            slug
            uri
            title
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
  });

  return {
    props: { post: data?.posts },
    revalidate: 1,
  };
}

export default Posts;
