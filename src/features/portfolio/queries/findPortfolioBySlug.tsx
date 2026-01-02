import { gql } from "graphql-request";
import { wpRequest } from "@/src/lib/wp";

import { notFound } from "next/navigation"

export default async function findPortfolioBySlug(slug: string) {
  const query = gql`
    query PortofolioItemPost($id: ID!) {
      portofolioItemPost(id: $id, idType: SLUG) {
        id
        title
        content
        date
        portfolioContentItem {
          projectName
          headerImage {
            node {
              id
              sourceUrl
              altText
            }
          }
          heroImage {
            node {
              id
              sourceUrl
              altText
            }
          }
          itemProjectCategory {
            nodes {
              id
              name
              link
            }
          }
          jenisPerusahaan
          liveDemoUrl
          jenisPekerjaan
          timProject {
            nodes {
              id
              name
              link
            }
          }
          softwarePreview {
            jenisSoftware
            deskripsiSingkat
            software {
              nodes {
                id
                name
                link
                ... on WithAcfDetailSoftwareCategory {
                  detailSoftwareCategory {
                    softwareCategoryImage {
                      node {
                        id
                        sourceUrl
                        altText
                      }
                    }
                  }
                }
              }
            }
            previewGambar {
              nodes {
                id
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `;

  const portfolioData = await wpRequest<any>(query, { id: slug });

  if (!portfolioData || !portfolioData.portofolioItemPost) {
    notFound();
  }

  const portfolioImages = [
    portfolioData.portofolioItemPost.portfolioContentItem.heroImage?.node
      ?.sourceUrl,

    ...portfolioData.portofolioItemPost.portfolioContentItem.softwarePreview.flatMap(
      (item: any) =>
        item.previewGambar?.nodes?.map((img: any) => img.sourceUrl) ?? []
    ),
  ].filter(Boolean);

  const toolsImages = [
    ...portfolioData.portofolioItemPost.portfolioContentItem.softwarePreview.flatMap(
      (item: any) =>
        item.software.nodes.map(
          (tool: any) =>
            tool.detailSoftwareCategory.softwareCategoryImage.node.sourceUrl
        ) ?? []
    ),
  ];

  return { portfolioData, portfolioImages, toolsImages };
}
