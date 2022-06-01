import LayoutMain from "../components/Layout/layout";
import React, { useEffect } from "react";
import styles from "../styles/post.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import CategorySidebar from "../components/Layout/categorySidebar/categorySidebar";

export default function Home({ data, items }) {
  const router = useRouter();

  const linkPath = router.asPath.split("/");
  linkPath.shift();
  linkPath.shift();

  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
  });
  const breadcrumb = pathArray;

  useEffect(() => {
    const headTitleName = document.querySelector(
      ".responsive-table__head__title--name"
    );
    const headTitleStatus = document.querySelector(
      ".responsive-table__head__title--status"
    );
    const headTitleTypes = document.querySelector(
      ".responsive-table__head__title--types"
    );
    const headTitleUpdate = document.querySelector(
      ".responsive-table__head__title--update"
    );
    const headTitleCountry = document.querySelector(
      ".responsive-table__head__title--country"
    );

    // Select tbody text from Dom
    const bodyTextName = document.querySelectorAll(
      ".responsive-table__body__text--name"
    );
    const bodyTextStatus = document.querySelectorAll(
      ".responsive-table__body__text--status"
    );
    const bodyTextTypes = document.querySelectorAll(
      ".responsive-table__body__text--types"
    );
    const bodyTextUpdate = document.querySelectorAll(
      ".responsive-table__body__text--update"
    );
    const bodyTextCountry = document.querySelectorAll(
      ".responsive-table__body__text--country"
    );

    // Select all tbody table row from Dom
    const totalTableBodyRow = document.querySelectorAll(
      ".responsive-table__body .responsive-table__row"
    );

    // Get thead titles and append those into tbody table data items as a "data-title" attribute
    for (let i = 0; i < totalTableBodyRow.length; i++) {
      bodyTextName[i].setAttribute("data-title", headTitleName.innerText);
      bodyTextStatus[i].setAttribute("data-title", headTitleStatus.innerText);
      bodyTextTypes[i].setAttribute("data-title", headTitleTypes.innerText);
      bodyTextUpdate[i].setAttribute("data-title", headTitleUpdate.innerText);
      bodyTextCountry[i].setAttribute("data-title", headTitleCountry.innerText);
    }
  }, []);

  if (!data?.posts?.nodes[0] || !breadcrumb.length)
    return (
      <LayoutMain>
        <div className={styles.notfound}>
          <div>
            <h1>We are sorry.</h1>
            <h1>This post is not avaliable right now.</h1>{" "}
            <button onClick={() => router.back()}>Go Back</button>
          </div>
        </div>
      </LayoutMain>
    );

  return (
    <LayoutMain items={items}>
      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.breadcrumb}>
            {breadcrumb && (
              <>
                {breadcrumb.map((link, i) => {
                  return (
                    <span key={i + "dfdf"}>
                      {link.breadcrumb}
                      <>{i !== breadcrumb.length - 1 && <span> &#62; </span>}</>
                    </span>
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

      {data?.customStyleBy?.rawStyledJsx &&
        data.customStyleBy.rawStyledJsx !== null && (
          <style jsx>
            {`
              ${data.customStyleBy.rawStyledJsx}
            `}
          </style>
        )}
    </LayoutMain>
  );
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: ["male hot", "eggs and age"] } }],
    fallback: "blocking", // false or 'blocking'
  };
}
export async function getStaticProps({ params }) {
  // console.log(params, "params");
  const name = params.slug[params.slug.length - 1];
  const categoryName = params?.slug[1];

  const { data } = await client.query({
    query: gql`
      query post($name: String, $slug: [String]) {
        customStyleBy(slug: $name) {
          rawStyledJsx
          slugName
        }
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
