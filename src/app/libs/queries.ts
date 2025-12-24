import { gql } from "graphql-request";

export class Queries {
  static async findPortfolioById() {
    return gql`
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
  }
}

// const findPortfolioById = gql`
//   query PortofolioItemPost($id: ID!) {
//     portofolioItemPost(id: $id, idType: SLUG) {
//       id
//       title
//       content
//       portfolioContentItem {
//         headerImage {
//           node {
//             id
//             sourceUrl
//             altText
//           }
//         }
//         heroImage {
//           node {
//             id
//             sourceUrl
//             altText
//           }
//         }
//         itemProjectCategory {
//           nodes {
//             id
//             name
//             link
//           }
//         }
//         jenisPerusahaan
//         liveDemoUrl
//         jenisPekerjaan
//         timProject {
//           nodes {
//             id
//             name
//             link
//           }
//         }
//         softwarePreview {
//           jenisSoftware
//           deskripsiSingkat
//           software {
//             nodes {
//               id
//               name
//               link
//               ... on WithAcfDetailSoftwareCategory {
//                 detailSoftwareCategory {
//                   softwareCategoryImage {
//                     node {
//                       id
//                       sourceUrl
//                       altText
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           previewGambar {
//             nodes {
//               id
//               sourceUrl
//               altText
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default findPortfolioById;
