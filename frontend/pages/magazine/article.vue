<template>

<p>Un article</p>

<h2>{{ title }}</h2>

</template> 

<script setup>

type PostData = {
    post: {
        title: String
    }[]
}

const query = gql`
    query getPostById {
        post (id: 32) {
            data {
                attributes {
                    title
                }
            }
        }
    }`

const { data } = await useAsyncQuery(query)

</script>