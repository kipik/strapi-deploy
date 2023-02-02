<template>
    <div>
        <h1>Strapi blog</h1>

        <Posts :posts="posts"></Posts>
    </div>
  </template>

<script>
import postsQuery from "~/apollo/queries/posts/posts";
import Posts from "~/components/Posts";
export default {
  data() {
    return {
      posts: {
        data: [],
      },
    };
  },
  components: {
    Posts,
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery,
    },
  },
};
</script>