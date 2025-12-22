import { GraphQLClient } from "graphql-request";

export const wp = new GraphQLClient(process.env.WP_GRAPHQL_ENDPOINT! as string, {
  headers: {
    "x-api-key": process.env.API_KEY! as string,
  },
});
