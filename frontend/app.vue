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

        <v-main class="bg-grey-lighten-4">
          <v-container fluid>
            
            <v-card class="mb-16">
              <v-carousel 
                hide-delimiters
                cycle
                show-arrows="hover"
                height="300"
                progress="primary"
              >
                <v-carousel-item
                  v-for="post in response.data" :key="post.id"
                >
                  <v-sheet
                    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                    height="100%"
                    cover
                  >
                    <div class="d-flex fill-height justify-center align-center">
                      <div class="text-h4">
                        {{ post.attributes.title }}
                      </div>
                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-card>

            <v-row dense class="posts_grid" v-for="post in response.data" :key="post.id">
                <v-card class="mb-6 bg-grey-lighten-6">
                  <div class="card-grid">
                    <div>
                      <v-card-title class="text-wrap text-h6">
                        {{ post.attributes.title }}
                      </v-card-title>

                      <v-card-actions>
                        <v-btn color="primary" class="ms-2" size="x-small" variant="tonal">Plus d'infos</v-btn>
                        <v-btn color="primary" class="ms-2" size="x-small" variant="outlined">On en discute</v-btn>
                      </v-card-actions>
                    </div>  
                    
                    <v-avatar
                      class="ma-3"
                      size="75"
                      rounded="0"
                    >
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                      cover
                      ></v-img>
                    </v-avatar>
                  </div>  
                </v-card>
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
}
.card-grid {
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-template-areas:  
  "title img"
  "sub img"
  "actions img";
}
.v-card-title {
  grid-area: title;
  padding: 0 4px;
}
.v-card-subtitle {
  grid-area: sub;
}
.v-card-actions {
  grid-area: actions;
  padding: 0;
}
.v-avatar {
  grid-area: img;
}
</style>