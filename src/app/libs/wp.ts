import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.WP_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY!,
    "User-Agent": "NextJS-Server",
  },
});

export async function wpRequest<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  return client.request<T>(query, variables);
}
