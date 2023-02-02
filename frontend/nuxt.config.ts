// https://nuxt.com/docs/api/configuration/nuxt-config

// import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/strapi'
],
  css: [
    'vuetify/lib/styles/main.sass',
    // '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
},
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://walrus-app-sbjbt.ondigitalocean.app/graphql'
      }
    }
  },
  strapi: {
    url: process.env.STRAPI_URL || 'https://walrus-app-sbjbt.ondigitalocean.app',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
    },
    buildModules: [
      '@nuxtjs/vuetify']
})
