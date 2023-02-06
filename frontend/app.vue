<template>
  <div>
    <NuxtLayout>
      <header>
        <v-list>
          <v-list-item>
            <NuxtLink to="/">Home</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/jeux">Les jeux</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/campagnes">Les campagnes participatives</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/magazine">Le magazine</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/mon-profil">Mon Cwowd</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/professionnel">Accès pros</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/contact">Nous contacter</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/privacy">Respect de la vie privée</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="tou">Terms of Use</NuxtLink>
          </v-list-item>
        </v-list>
      </header>
      
      <h3>Ceci est la :
      <span>
        <NuxtPage />
      </span>
      </h3>
    </NuxtLayout>
  </div>
</template>

<!-- <template>
  <v-app id="inspire">
   <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>

    <v-card max-width="448" class="mx-auto" color="grey-lighten-8">
      <v-layout>
        <v-app-bar 
          elevation="2"
          color="teal-darken-4"
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
            
            <v-card class="mb-8">
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
                    src= "https://images-pour-strapi.fra1.digitaloceanspaces.com/Quodd_Heroes_2nd_Edition_par_Wonderment_Games_9a5707a8fb.jpg"
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
                <v-card class="mb-3 bg-grey-lighten-6">
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
                      <img src= "https://images-pour-strapi.fra1.digitaloceanspaces.com/Quodd_Heroes_2nd_Edition_par_Wonderment_Games_9a5707a8fb.jpg"
                      cover />
                    </v-avatar>
                  </div>  
                </v-card>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template> -->

<!-- <script lang="ts">
export default {
    data: () => ({ drawer: null }),
    image: {
    strapi: {}
    }
  }
</script> -->

<script setup lang="ts">
// import type { Posts } from '~/types'
// const { find } = useStrapi()
// const response = await find<Post>('posts?populate=*')

// const entries = await strapi.entityService.findMany('api::article.article', {
//   populate: '*',
// });
// console.log('entries :' + entries) -->

// console.log(response.data[0].attributes.feature_image.attributes.url)
// const query = gql`
  // query getPosts($limit: Int!) {
    // posts(limit: $limit) {
      // id
      // title2
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