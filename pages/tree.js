import React from "react";
import LayoutMain from "../components/Layout/layout";
import { gql } from "@apollo/client";
import Link from "next/link";
import client from "../apollo-client";
const tree = ({ data }) => {
  console.log(data);
  return (
    <LayoutMain>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data.pages.nodes[0].content,
        }}
        
      ></div> */}

      <div className="container">
        <h1 className="level-1 rectangle">FERTILITY CONDITIONS</h1>
        <ol className="level-2-wrapper">
          <li>
            <h2 className="level-2 rectangle">
              <Link href="/category/fertility-conditions/female-conditions/immune-infertility/">
                <a>FEMALE</a>
              </Link>
            </h2>
            <ol className="level-3-wrapper">
              <li>
                <h3 className="level-3 rectangle">
                  <Link href="/category/fertility-conditions/female-conditions/immune-infertility/">
                    <a>FEMALE</a>
                  </Link>
                </h3>
                <ol className="level-4-wrapper">
                  <li>
                    <h4 className="level-4 rectangle">ANA</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">ASAb</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">HLA</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">LA</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">
                      <li>NK cells</li>
                    </h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">OA</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">CYTOKINES</h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className="level-3 rectangle">CONDITIONS</h3>
                <ol className="level-4-wrapper">
                  <li>
                    <h4 className="level-4 rectangle">ANOVULATION + </h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">FEMALE AGE</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">
                      FALLOPIAN TUBE BLOCKAGES
                    </h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">LUTEAL PHASE DEFECT</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">IMPLANTATION FAILURE</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">GENETIC CONDITIONS</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">MISCARRIAGE</h4>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h2 className="level-2 rectangle">CONDITIONS</h2>
            <ol className="level-3-wrapper">
              <li>
                <h3 className="level-3 rectangle">BOTH M/F</h3>
                <ol className="level-4-wrapper">
                  <li>
                    <h4 className="level-4 rectangle">THYROID DISORDERS +</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">
                      UNEXPLAINED INFERTILITY +
                    </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className="level-3 rectangle">MALE</h3>
                <ol className="level-4-wrapper">
                  <li>
                    <h4 className="level-4 rectangle">AGE</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">CAUSES</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">ERECTILE DYSFUNCTION</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">DRUGS </h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">GENETICS</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">LACK OF LIBIDO</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">MOTILITY & MORPHOLOGY</h4>
                  </li>
                  <li>
                    <h4 className="level-4 rectangle">SPERM COUNT </h4>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </LayoutMain>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query treeData {
        pages(where: { name: "fertility-conditions" }) {
          nodes {
            content(format: RENDERED)
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

export default tree;
