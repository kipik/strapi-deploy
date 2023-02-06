<template>
    <div>
        jeu id: {{ $route.params.id }}
    </div>
</template>

<script setup>
const route = useRoute()

console.log(route.params.id)
</script>