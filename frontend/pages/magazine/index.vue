<template>
    <div>Articles</div>

    <p>Il y a {{ data.posts.data.length || 0 }} articles.</p>

    <CardsPostShort 
        v-for="post in data.posts.data"
        :key="post.id"
        :title="post.attributes.title"
        :excerpt="post.attributes.excerpt"
        :date="post.attributes.publish_date"
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
            id: string,
            title: string,
            excerpt: string,
            publish_date: string
        }[]
    }
}

const query = gql`
    query getAllPosts {
        posts {
            data {
                attributes {
                    publish_date
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