import styles from "../../../styles/male.module.scss";
import Image from "next/image";
import BetterSystemSidebar from "../../../components/betterSystemSidebar/betterSystemSidebar";
import BetterSystemLeft from "../../../components/betterSystemLeft/betterSystemLeft";
import LayoutMain from "../../../components/Layout/layout";
import client from "../../../apollo-client";
import { gql } from "@apollo/client";

const Female = ({ data }) => {
  const female = true;

  return (
    <LayoutMain>
      <div className={styles.main}>
        <div className={styles.main__content}>
          <div className={styles.container}>
            <p className={styles.breadcrumb}>
              Morefertitle &gt; System Biology
            </p>

            <h1 className={styles.title}>System Biology</h1>

            <div className={styles.imgContainter}>
              <Image
                src="/better-system.png"
                width={1024}
                height={487}
                layout="responsive"
                alt="better-system"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.content__left}>
                <BetterSystemLeft data={data.categories} female={female} />
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
  console.log(data, "male data");
  return {
    props: { data },
    revalidate: 1,
  };
}

export default Female;
