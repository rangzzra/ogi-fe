import { gql } from "graphql-request";
import { wpRequest } from "@/src/lib/wp";
import { notFound } from "next/navigation";

export default async function getLanguages() {
  const query = gql`
    query GetLanguages {
      languages {
        id
        slug
        locale
        name
      }
    }
  `;

  let data = await wpRequest<{
    languages: {
      id: string;
      slug: string;
      locale: string;
      name: string;
    }[];
  }>(query);

  if (!data?.languages?.length) {
    data = {
        languages: [
            {
                id: "id",
                slug: "id",
                locale: "id_ID",
                name: "Bahasa Indonesia",
            }
        ]
    }
  }

  return data.languages.map((lang) => ({
    id: lang.id,
    slug: lang.slug,
    locale: lang.locale,
    name: lang.name,
  }));
}
