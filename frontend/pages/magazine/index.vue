<template>
    <div>Articles</div>

    <p>Il y a {{ data.posts.data.length || 0 }} articles.</p>
    <br />

    <!-- <v-card v-for="post in data.posts.data" :key="post.id">
        <p>id: {{ post.id }} a pour image : {{ post.attributes.feature_image.data.attributes.url }}</p>
    </v-card> -->

    <!-- <p>{{ data.posts.data }}</p> -->

    <CardsPostShort 
        v-for="post in data.posts.data"
        :key="post.id"
        :title="post.attributes.title"
        :excerpt="post.attributes.excerpt"
        :date="post.attributes.publishedAt"
        :id="post.id"
        :image="post.attributes.feature_image.data.attributes.url"
    />

    <!-- <h3>Avec image</h3>
    <v-card v-for="post in data.posts.data" :key="post.id">
        <p>id: {{ post.id }} a pour image : {{ post.attributes.feature_image.data.attributes.url }}</p>
    </v-card> -->
</template>

<!-- 
!!! Requête fonctionnelle en restAPI
 -->

<!-- <script setup lang="ts">
import type { Posts } from '~/types'
const { find } = useStrapi()
const response = await find<Post>('posts?populate=*')
</script> -->

<!-- 
!!! Requête en graphql
 -->

<script lang="ts" setup>
type PostsData = {
    posts: {
        id: String,
        title: String,
        excerpt: String,
        date: String,
        image: String
        }[]
    }

// const image = post.attributes.feature_image.data.attributes.url

const query = gql`
    query getAllPosts {
        posts {
            data {
                id
                attributes {
                    publishedAt
                    title
                    excerpt
                    feature_image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }

`

const { data } = await useAsyncQuery<PostsData>(query)
</script>