import styles from "../../styles/male.module.scss";
import Image from "next/image";

import LayoutMain from "../../components/Layout/layout";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import PostBetterSystemLeft from "../../components/PostBetterSystemLeft/PostBetterSystemLeft";
import BetterSystemSidebar from "../../components/betterSystemSidebar/betterSystemSidebar";

const SystemsBiology = ({ data }) => {
  console.log(data, "main index js");
  return (
    <LayoutMain>
      <div className={styles.main}>
        <div className={styles.main__content}>
          <div className={styles.container}>
            <p className={styles.breadcrumb}>Systems Biology</p>

            <h1 className={styles.title}>{data.categories.nodes[0].name}</h1>

            <div className={styles.imageContainter}>
              <Image
                src="/better-system.png"
                width={1024}
                height={487}
                alt="better-system"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.content__left}>
                <PostBetterSystemLeft />

                {data?.categories?.nodes[0]?.posts?.nodes[1] && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data?.categories?.nodes[0]?.posts?.nodes[1].content,
                    }}
                    className={styles.post__content}
                  ></div>
                )}
              </div>

              <div className={styles.content__right}>
                <BetterSystemSidebar categories={data.categories} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bg__color}></div>
      </div>
    </LayoutMain>
  );
};

export async function getStaticProps() {
  // const category = params.category.join("/");

  const { data } = await client.query({
    query: gql`
      query GetSystemData {
        categories(where: { slug: "systems-biology" }) {
          nodes {
            name
            uri
            slug

            posts {
              nodes {
                title
                uri
                slug
                content
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
    `,
  });

  return {
    props: { data },
    revalidate: 1,
  };
}

export default SystemsBiology;
