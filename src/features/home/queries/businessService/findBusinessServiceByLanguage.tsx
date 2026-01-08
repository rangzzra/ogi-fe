import { gql } from "graphql-request";
import { wpRequest } from "@/src/lib/wp";

import { notFound } from "next/navigation";

export default async function findBusinessServiceByLanguage(slug: string) {
  const query = gql`
    query GetServices {
      services(where: { language: ${slug} }) {
        nodes {
          id
          title
          content
          businessService {
            services: businessService {
              nodes {
                id
                name
                description
                slug
                ... on WithAcfDetailProjectCategory {
                  detailProjectCategory {
                    projectCategoryImage {
                      node {
                        sourceUrl
                        altText
                      }
                    }
                  }
                }
              }
            }
            serviceImageCaption {
              serviceImageCaptionText
            }
          }
        }
      }
    }
  `;

  const data = await wpRequest<{
    services: {
      nodes: {
        id: string;
        title: string;
        content: string;
        businessService: {
          services: {
            nodes: {
              id: string;
              name: string;
              description: string;
              slug: string;
            }[];
          };
          serviceImageCaption: {
            serviceImageCaptionText: string;
          };
        };
      }[];
    };
  }>(query);

  if (!data?.services?.nodes?.length) {
    notFound();
  }

  const service = data.services.nodes[0];

  return {
    id: service.id,
    title: service.title,
    content: service.content,
    businessService: {
      services: service.businessService.services.nodes.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        slug: item.slug,
      })),
      serviceImageCaption:
        service.businessService.serviceImageCaption.serviceImageCaptionText,
    },
  };
}
