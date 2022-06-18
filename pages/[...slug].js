import LayoutMain from "../components/Layout/layout";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/post.module.scss";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

import CategorySidebar from "../components/Layout/categorySidebar/categorySidebar";
import Script from "next/script";
import { AuthContext } from "../context/AuthProvider";

export default function Home({ data, items }) {
  const router = useRouter();
  const { openModal } = useContext(AuthContext);
  const [accordions, setAccordions] = useState([]);

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

  useEffect(() => {
    const getAccordion = () => {
      var acc = document.getElementsByClassName("accordion");
      return acc;
    };
    setAccordions(getAccordion());
  }, [data]);

  useEffect(() => {
    if (accordions.length > 0) {
      var i;
      console.log(accordions.length, "accir");
      for (i = 0; i < accordions.length; i++) {
        accordions[i]?.addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    }
    return () => {
      for (i = 0; i < accordions.length; i++) {
        accordions[i]?.removeEventListener("click");
      }
    };
  }, [accordions]);

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
    <>
      <Head>
        {/* <script async type="text/javascript" src="/js/accordion.js"></script> */}
        {linkPath[linkPath.length - 1] === "semen-sampling" && (
          <>
            <script
              async
              type="text/javascript"
              src="https://d3js.org/d3.v7.min.js"
            ></script>
            <script
              async
              type="text/javascript"
              src="/js/vis-tooltip.js"
            ></script>
            <script
              async
              type="text/javascript"
              src="/js/vis-range-chart.js"
            ></script>
            <script
              async
              type="text/javascript"
              src="/js/vis-percentage-bar-chart.js"
            ></script>
            <script
              async
              type="text/javascript"
              src="/js/vis-semen-values-distribution.js"
            ></script>
            <script
              async
              type="text/javascript"
              src="/js/vis-semen-sample-normal.js"
            ></script>
            <script
              async
              type="text/javascript"
              src="/js/vis-semen-sample-abnormal.js"
            ></script>
          </>
        )}
      </Head>

      <LayoutMain items={items}>
        {linkPath[linkPath.length - 1] === "semen-sampling" && (
          <Script id="VisSemenValuesDistribution">
            new VisSemenValuesDistribution(
            document.getElementById(`visSemenValuesDistribution`) ); new
            VisSemenSampleNormal(document.getElementById(`visSemenSampleNormal`));
            new VisSemenSampleAbnormal(
            document.getElementById(`visSemenSampleAbnormal`) );
          </Script>
        )}
        <div className={styles.main}>
          <div className={styles.container}>
            <p className={styles.breadcrumb}>
              {breadcrumb && (
                <>
                  {breadcrumb.map((link, i) => {
                    return (
                      <span key={i + "dfdf"}>
                        {link.breadcrumb}
                        <>
                          {i !== breadcrumb.length - 1 && <span> &#62; </span>}
                        </>
                      </span>
                    );
                  })}
                </>
              )}
            </p>

            <div className={styles.categoriesName}>
              <div className={styles.left}>
                <Link href="/fertility-health">
                  <a>
                    <span
                      className={
                        breadcrumb[0].breadcrumb === "fertility-health"
                          ? styles.activeCategory
                          : ""
                      }
                    >
                      Fertility Health
                    </span>
                  </a>
                </Link>
                <Link href="/fertility-conditions">
                  <a>
                    <span
                      className={
                        breadcrumb[0].breadcrumb === "fertility-conditions"
                          ? styles.activeCategory
                          : ""
                      }
                    >
                      Fertility Conditons
                    </span>
                  </a>
                </Link>
              </div>
              <div className={styles.right}>
                <Link href="/fertility-treatments">
                  <a>
                    <span
                      className={
                        breadcrumb[0].breadcrumb === "fertility-treatments"
                          ? styles.activeCategory
                          : ""
                      }
                    >
                      Fertility Treatments
                    </span>
                  </a>
                </Link>

                <span className={styles.start} onClick={openModal}>
                  Start you fertility journey
                </span>
              </div>
            </div>

            <h1 className={styles.title}>{data?.posts?.nodes[0]?.title}</h1>

            {data?.posts?.nodes[0]?.featuredImage !== null &&
            data?.posts?.nodes[0]?.featuredImage ? (
              <div className={styles.heroImageContainer}>
                <Image
                  // layout="responsive"
                  width={1240}
                  height={487}
                  src={data?.posts?.nodes[0]?.featuredImage?.node.mediaItemUrl}
                  alt={data?.posts?.nodes[0]?.featuredImage?.node.altText}
                />
              </div>
            ) : (
              <div className={styles.heroImageContainer}>
                <Image
                  // layout="responsive"
                  width={1240}
                  height={487}
                  src="/images/couple.png"
                  alt=""
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
    </>
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
