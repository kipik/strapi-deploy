import getPostsQuery from "./getPosts.graphql";
import { Query } from "@/types";
export default async function strapiGetPosts() {
  const { $graphqlClient } = useNuxtApp();
  const { data } = await $graphqlClient.query<Required<Pick<Query, "posts">>>({
    query: getPostsQuery,
  });
  return data.posts;
}
