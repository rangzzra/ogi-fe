import { gql } from "graphql-request";

import { wpRequest } from "@/src/lib/wp";
import { notFound } from "next/navigation";

export default async function findNavbarByLanguage(slug: string) {
  const slugValue = `navbar-${slug.toLowerCase()}`;
  const query = gql`
    query GetNavbarMenu {
      menus(where: { slug: "${slugValue}" }) {
        nodes {
          id
          name
          slug
          menuItems {
            nodes {
              id
              label
              url
            }
          }
        }
      }
    }
  `;

  const data = await wpRequest<{
    menus: {
      nodes: {
        id: string;
        name: string;
        slug: string;
        menuItems: {
          nodes: {
            id: string;
            label: string;
            url: string;
          }[];
        };
      }[];
    };
  }>(query);

  if (!data?.menus?.nodes?.length) {
    notFound();
  }

  const menu = data.menus.nodes[0];

  return {
    id: menu.id,
    name: menu.name,
    slug: menu.slug,
    menuItems: menu.menuItems.nodes.map((item) => ({
      id: item.id,
      label: item.label,
      url: item.url,
    })),
  };
}
