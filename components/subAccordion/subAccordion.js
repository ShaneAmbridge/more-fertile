// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./subAccordion.module.scss";
// const SubAccordion = ({ subcategory }) => {
//   console.log(subcategory.posts, "sub category accordion");
//   const [active, setActive] = useState(false);
//   return (
//     <li>
//       <span className={styles.smCategory}>
//         <Link href={`${subcategory?.uri}`} passHref>
//           <a>
//             <span className={styles.subSmCategory}>{subcategory.name}</span>
//           </a>
//         </Link>
//         {/* <>
//           {subcategory?.posts.nodes.length > 0 && (
//             <>
//               {active ? (
//                 <span
//                   className={active ? styles.animationPlus : styles.plus}
//                   onClick={() => setActive(false)}
//                 >
//                   <Image
//                     src="/images/minus-line.svg"
//                     width={12}
//                     height={12}
//                     alt="plus"
//                   />
//                 </span>
//               ) : (
//                 <span className={styles.minus} onClick={() => setActive(true)}>
//                   <Image
//                     src="/images/plus-line.svg"
//                     width={12}
//                     height={12}
//                     alt="plus"
//                   />
//                 </span>
//               )}
//             </>
//           )}
//         </> */}

//         {/* {active && (
//           <ul className={`${styles.superSubCategory}`}>
//             <div className={styles.categoryAnimation}>
//               {subcategory?.posts.nodes.map((subcategory, k) => {
//                 console.log(item, "item subcategory");
//                 return <p key={k}>{subcategory.name}</p>;
//               })}
//             </div>
//           </ul>
//         )} */}
//       </span>
//     </li>
//   );
// };

// export default SubAccordion;
