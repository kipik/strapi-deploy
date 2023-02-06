import { defineNuxtPlugin } from "#app";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const fetchPolicy = "no-cache";
  const graphqlClient = new ApolloClient({
    // Provide required constructor fields
    link: new HttpLink({
      uri: config.public.graphqlUrl,
    }),
    cache: new InMemoryCache({
      addTypename: false,
    }),
    // Provide some optional constructor fields
    name: "x-graphql-client",
    connectToDevTools: true,
    assumeImmutableResults: true,
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: { fetchPolicy },
      query: { fetchPolicy },
    },
  });
  return {
    // Using provide here allows Nuxt3 to generate typings
    provide: {
      graphqlClient,
    },
  };
});
