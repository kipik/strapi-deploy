<template>
    <div>Articles</div>

    <p>Il y a {{ response.data.length || 0 }} articles.</p>

</template>

<script setup lang="ts">
import type { Posts } from '~/types'
const { find } = useStrapi()
const response = await find<Post>('posts?populate=*')

// const entries = await strapi.entityService.findMany('api::article.article', {
//   populate: '*',
// });
// console.log('entries :' + entries)

// const Posts = gql`
//   posts {
//     data {
//       id
//       attributes {
//         title
//       }
//     }
//   }
// `

// const { listPosts } = await useAsyncQuery(query)
</script>