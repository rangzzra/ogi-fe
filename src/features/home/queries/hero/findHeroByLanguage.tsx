import { gql } from "graphql-request";
import { wpRequest } from "@/src/lib/wp";

import { notFound } from "next/navigation";

export default async function findHeroByLanguage(slug: string) {
  const query = gql`
    query GetHeaders {
      heroManagements(where: { language: ${slug} }) {
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
      nodes: {
        id: string;
        title: string;
        content: string;
        date: string;
        language: {
          code: string;
          name: string;
        };
        featuredImage: {
          node: {
            sourceUrl: string;
          };
        };
        heroItemContent: {
          heroVideoBanner: {
            node: {
              id: string;
              file: string;
              mediaItemUrl: string;
              date: string;
            };
          };
          leftSideImage: {
            node: {
              id: string;
              sourceUrl: string;
            };
          };
          rightSideImage: {
            node: {
              id: string;
              sourceUrl: string;
            };
          };
          industryCategoryItem: {
            nodes: {
              id: string;
              name: string;
              slug: string;
              description: string;
            }[];
          };
          industryCategoryCaption: {
            forEach(arg0: (caption: any) => void): unknown;
            industryCategoryCaptionText: string;
          };
        };
      }[];
    };
  }>(query);

  if (!data?.heroManagements?.nodes?.length) {
    notFound();
  }

  return { heroItem: data.heroManagements.nodes[0] };
}

