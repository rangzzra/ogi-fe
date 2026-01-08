import { gql } from "graphql-request";
import { wpRequest } from "@/src/lib/wp";

import { notFound } from "next/navigation";

export default async function getAllHeroes() {
  const query = gql`
    query GetHeaders {
      heroManagements {
        nodes {
          id
          title
          content
          date
          language {
            code
            name
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          heroItemContent {
            heroVideoBanner {
              node {
                id
                file
                mediaItemUrl
                date
              }
            }
            leftSideImage {
              node {
                id
                sourceUrl
              }
            }
            rightSideImage {
              node {
                id
                sourceUrl
              }
            }
            industryCategoryItem {
              nodes {
                id
                name
                slug
                description
                ... on WithAcfDetailBusinessCategory {
                  detailBusinessCategory {
                    categoryImage {
                      node {
                        id
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
            industryCategoryCaption {
              industryCategoryCaptionText
            }
          }
        }
      }
    }
  `;

  const data = await wpRequest<{
    heroManagements: {
      nodes: any[];
    };
  }>(query);

  if (!data?.heroManagements?.nodes?.length) {
    notFound();
  }

  return data.heroManagements.nodes;
}
