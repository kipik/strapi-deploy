// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi'],
    strapi: {
      url: 'http://localhost:1338'
    },
})

