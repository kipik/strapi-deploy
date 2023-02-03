<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer> -->

    <v-card max-width="448" class="mx-auto" color="grey-lighten-8">
      <v-layout>
        <v-app-bar 
          elevation="2"
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
          density="compact"
        >
          <v-app-bar-title>Cwowd : le WiP</v-app-bar-title>
          <template v-slot:image>
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template>
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>
          <template  v-slot:append>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template> 
        </v-app-bar>

        <v-main>
          <v-container fluid>
            <v-row dense class="posts_grid" v-for="post in response.data" :key="post.id">
               <!-- <div>  -->
                <v-card>
                  <div class="card-grid">
                    <div>
                      <v-card-title class="text-wrap">
                        {{ post.attributes.title }}
                      </v-card-title>

                      <v-card-subtitle class="text-wrap">
                        {{ post.attributes.excerpt }}
                      </v-card-subtitle>

                      <v-card-actions>
                        <v-btn color="primary" class="ms-2" size="x-small" variant="text">Plus d'infos</v-btn>
                        <v-btn color="primary" class="ms-2" size="x-small" variant="outlined">On en discute</v-btn>
                      </v-card-actions>
                    </div>  
                    
                    <v-avatar
                      class="ma-3"
                      size="120"
                      rounded="0"
                    >
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                      cover
                      ></v-img>
                    </v-avatar>
                  </div>  
                </v-card>
              <!-- </div> -->
            </v-row>
          </v-container>
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

// const query = gql`
  // query getPosts($limit: Int!) {
    // posts(limit: $limit) {
      // id
      // title
    // }
  // }
// `
// const variables = { limit: 5 }
// const { listPosts } = await useAsyncQuery(query, variables)
</script>

<style>
.posts_grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 0;
  margin: 0;
  padding: 0;
  row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  justify-content: space-between;
  align-content: space-between;
}
.card-grid {
  display: grid;
  grid-template-columns: 1fr 120px;
  justify-items: stretch;
  align-items: stretch;

}
</style>