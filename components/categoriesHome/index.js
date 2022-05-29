// import styles from "../../styles/posts.module.scss";
// import Image from "next/image";
// import LayoutMain from "../../components/Layout/layout";
// import { gql } from "@apollo/client";
// import client from "../../apollo-client";
// import Link from "next/link";
// import CategorySidebar from "../../components/Layout/categorySidebar/categorySidebar";

// const Posts = ({ items, data }) => {
//   // console.log(data?.posts, "data");
//   return (
//     <LayoutMain items={items}>
//       <div className={styles.main}>
//         <div className={styles.container}>
//           <h1 className={styles.title}>Show the all post here</h1>

//           <div className={styles.content}>
//             <div className={styles.contentCards}>
//               <div className={styles.cards}>
//                 {data?.posts?.nodes.map((item, index) => {
//                   return (
//                     <div key={index} className={styles.card}>
//                       {item.featuredImage !== null ? (
//                         <Image
//                           width="320px"
//                           height="193px"
//                           src={item.featuredImage.node.mediaItemUrl}
//                           alt={item.featuredImage.node.altText}
//                         />
//                       ) : (
//                         <Image
//                           width="320px"
//                           height="193px"
//                           src="/images/morefertile-logo.png"
//                           alt=""
//                         />
//                       )}
//                       <div className={styles.infos}>
//                         <div className={styles.titleAndDescription}>
//                           {" "}
//                           <h3>{item.title}</h3>
//                           <div
//                             dangerouslySetInnerHTML={{
//                               __html: item?.excerpt.slice(0, 150) + "...",
//                             }}
//                             className={styles.content}
//                           ></div>
//                         </div>

//                         <Link href={`${item?.uri}`} passHref>
//                           <a>
//                             <button>Read more</button>
//                           </a>
//                         </Link>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <CategorySidebar categories={data?.categories} />
//           </div>
//         </div>
//       </div>
//     </LayoutMain>
//   );
// };

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query allPosts {
//         posts(first: 50) {
//           nodes {
//             excerpt
//             link
//             slug
//             uri
//             title
//             featuredImage {
//               node {
//                 altText
//                 mediaItemUrl
//               }
//             }
//           }
//         }

//         categories(first: 50) {
//           nodes {
//             name
//             uri
//             children {
//               nodes {
//                 uri
//                 name
//                 children {
//                   nodes {
//                     uri
//                     name
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   });
//   // console.log(data.categories);

//   return {
//     props: { data },
//     revalidate: 1,
//   };
// }

// export default Posts;
