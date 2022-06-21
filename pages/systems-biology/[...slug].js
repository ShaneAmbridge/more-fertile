import styles from "../../styles/male.module.scss";
import Image from "next/image";
import BetterSystemSidebar from "../../components/betterSystemSidebar/betterSystemSidebar";

import LayoutMain from "../../components/Layout/layout";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import PostBetterSystemLeft from "../../components/PostBetterSystemLeft/PostBetterSystemLeft";
import { useRouter } from "next/router";
import Link from "next/link";

const PostDetails = ({ data }) => {
  const router = useRouter();
  const linkPath = router.asPath.split("/");
  linkPath.shift();

  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
  });
  const breadcrumb = pathArray;

  const activeBreadcrumb = linkPath[linkPath.length - 1];
  return (
    <LayoutMain>
      <div className={styles.main}>
        <div className={styles.main__content}>
          <div className={styles.container}>
            <p className={styles.breadcrumb}>
              {breadcrumb && (
                <>
                  {breadcrumb.map((link, i) => {
                    console.log(link, "link");
                    return (
                      <Link key={i + "dfdf"} href={link.href}>
                        <a>
                          <span
                            className={
                              activeBreadcrumb === link.breadcrumb
                                ? styles.activeBreadbrumb
                                : ""
                            }
                          >
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

            <h1 className={styles.title}>System Biology</h1>

            {data?.posts?.nodes[0]?.featuredImage !== null &&
            data?.posts?.nodes[0]?.featuredImage ? (
              <div className={styles.imageContainter}>
                <Image
                  // layout="responsive"
                  width={1240}
                  height={487}
                  src={data?.posts?.nodes[0]?.featuredImage?.node.mediaItemUrl}
                  alt={data?.posts?.nodes[0]?.featuredImage?.node.altText}
                />
              </div>
            ) : (
              <div className={styles.imageContainter}>
                <Image
                  src="/better-system.png"
                  width={1024}
                  height={487}
                  alt="better-system"
                />
              </div>
            )}

            <div className={styles.content}>
              <div className={styles.content__left}>
                <PostBetterSystemLeft />

                {data.posts && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.posts?.nodes[0]?.content,
                    }}
                    className={styles.post__content}
                  ></div>
                )}
              </div>
              <div className={styles.content__right}>
                <BetterSystemSidebar categories={data?.categories} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bg__color}></div>
      </div>
    </LayoutMain>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: ["male-hot"] } }],
    fallback: "blocking", // false or 'blocking'
  };
}
export async function getStaticProps({ params }) {
  const name = params.slug[params.slug.length - 1];

  const { data } = await client.query({
    query: gql`
      query post($name: String) {
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
    variables: {
      name: name,
    },
  });

  // console.log(postOrTree, "postOrTree");
  return {
    props: { data },
    revalidate: 1,
  };
}

export default PostDetails;
