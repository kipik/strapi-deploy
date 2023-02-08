<template>
    <div>Articles</div>

    <p>Il y a {{ data.posts.data.length || 0 }} articles.</p>

    <CardsPostShort 
        v-for="post in data.posts.data"
        :key="post.id"
        :title="post.attributes.title"
        :excerpt="post.attributes.excerpt"
        :date="post.attributes.publishedAt"
        :id="post.id"
        :vignette="post.attributes.feature_image.data"
    />
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
        data: {
            id: String,
            title: String,
            excerpt: String,
            date: String,
            vignette: object
        }[]
    }
}

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