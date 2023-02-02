<template>
  <div>
    <h1>Cwowd : le blog en Wip</h1>
    <p>Réalisé avec Strapi + Nuxt. </p>
    <p>Fonctionne avec les requêtes API</p>
    <p>Reste à lier le bousin avec cette f* sal* de graphql</p>  
    <div>
      <ul>
        <h2>On appelle via l'API</h2>
        <li v-for="post in response.data" :key="post.id">
          <!-- <NuxtLink :to="{ name: 'post-id', params: { id: post.data.id } }" >
            {{ post.data.attributes.title }}
          </NuxtLink> -->
          <h3>{{ post.attributes.title }}</h3>
          <p>{{ post.attributes.excerpt }}</p>
          <!-- <span>Par {{ post.attributes.authors.id }}</span><span> , le{{ post.attributes.publish_date }}</span> -->
        </li>
      </ul>
      <ul>
        <h2>Essai en GraphQL</h2>
        <li v-for="post in listPosts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <!-- <p>{{ post.attributes.excerpt }}</p> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Posts } from '~/types'
const { find } = useStrapi()
const response = await find<Post>('posts')

const query = gql`
  query getPosts($limit: Int!) {
    posts(limit: $limit) {
      id
      title
    }
  }
`
const variables = { limit: 5 }
const { listPosts } = await useAsyncQuery(query, variables)
</script>