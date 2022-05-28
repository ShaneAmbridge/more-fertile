import LayoutMain from "../components/Layout/layout";
import styles from "../styles/post.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Image from "next/image";
import Link from "next/link";

import CategorySidebar from "../components/Layout/categorySidebar/categorySidebar";

export default function Home({ data, items }) {
  console.log(data, "data");

  const linkPath = data?.posts?.nodes[0]?.uri.split("/");
  linkPath.shift();

  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
  });
  const breadcrumb = pathArray.slice(0, -1);

  return (
    <LayoutMain items={items}>
      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.breadcrumb}>
            {breadcrumb && (
              <>
                {breadcrumb.map((link, i) => {
                  return (
                    <Link key={i + "dfdf"} href={link.href}>
                      <a>
                        <span>
                          {link.breadcrumb}
                          <>
                            {i !== breadcrumb.length - 1 && (
                              <span> &#62; </span>
                            )}
                          </>
                        </span>
                      </a>
                    </Link>
                  );
                })}
              </>
            )}
          </p>
          <h5 className={styles.subTitle}>
            <Link href={breadcrumb[0].href}>
              <a>{breadcrumb[0].breadcrumb}</a>
            </Link>
          </h5>
          <h1 className={styles.title}>{data?.posts?.nodes[0]?.title}</h1>

          {data?.posts?.nodes[0]?.featuredImage !== null &&
            data?.posts?.nodes[0]?.featuredImage && (
              <div className={styles.heroImageContainer}>
                <Image
                  layout="responsive"
                  width={1024}
                  height={487}
                  src={data?.posts?.nodes[0]?.featuredImage?.node.mediaItemUrl}
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
      {/* )} */}
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
  console.log(params, "params");
  const name = params.slug[params.slug.length - 1];
  const categoryName = params?.slug[0];

  const { data } = await client.query({
    query: gql`
      query post($name: String, $slug: [String]) {
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

        categories(where: { slug: $slug }) {
          nodes {
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
                    posts {
                      nodes {
                        title
                        uri
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
      name: name,
      slug: categoryName,
    },
  });

  // console.log(postOrTree, "postOrTree");
  return {
    props: { data },
    revalidate: 1,
  };
}
