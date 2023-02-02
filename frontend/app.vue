<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer> -->

    <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
      <v-layout>
        <v-app-bar 
          elevation="2"
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-toolbar-title>Cwowd.com</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

      </v-app-bar>

      <v-main>
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
      </v-main>
    </v-layout>
    </v-card>
  </v-app>
</template>

<script lang="ts">
export default {
    data: () => ({ drawer: null }),
  }
</script>

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