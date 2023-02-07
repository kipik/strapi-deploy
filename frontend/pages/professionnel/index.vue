<template>
    <div>
         Je suis un professionnel
    </div>

    <!-- <p>{{ data }}</p> -->
    <!-- <ul>
        <li v-for="post in posts" :key="post.data.id">
            {{ post.data.attributes.title }}
        </li>
    </ul> -->
</template>

<!-- <script lang="ts" setup>
    const query = gql`
        query getAllPosts {
            posts {
                data {
                    attributes {
                        title
                    }
                }
            }
        }
    `


    const { data } = await useAsyncQuery(query)
</script> -->

<!-- <script>
const query = gql`
    query {
        posts {
            id
            title
        }
    }
`

export default {
    async asyncData({ $apollo }) {
        const result = await $apollo.query({ query })
        console.log(result)
        return { posts: result.data.posts }
    },
    data() {
        return {
            posts: []
        }
    }
}  

</script> -->