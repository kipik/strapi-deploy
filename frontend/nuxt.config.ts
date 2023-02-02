// https://nuxt.com/docs/api/configuration/nuxt-config

// import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/strapi'
],
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
    }
})
