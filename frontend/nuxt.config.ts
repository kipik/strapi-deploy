// https://nuxt.com/docs/api/configuration/nuxt-config

// import { defineNuxtConfig } from 'nuxt';
import { resolve } from "path";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    // 'nuxt-graphql-client', 
  ],
  css: [
    'vuetify/lib/styles/main.sass',
    // '@mdi/font/css/materialdesignicons.min.css',
    // "~/assets/main.scss"
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  // runtimeConfig: {
  //   public: {
  //     GQL_HOST: 'https://walrus-app-sbjbt.ondigitalocean.app/graphql' // overwritten by process.env.GQL_HOST
  //   }
  // },
  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: 'https://walrus-app-sbjbt.ondigitalocean.app/graphql',
        browserHttpEndpoint: '',
        wsEndpoint: '',
        httpLinkOptions: {},
        wsLinkOptions: {},
        websocketsOnly: false,
        connectToDevTools: false,
        defaultOptions: {},
        inMemoryCacheOptions: {},
        tokenName: 'apollo:<client-name>.token',
        tokenStorage: 'cookie',
        authType: 'Bearer',
        authHeader: 'Authorization'
      },
      other: './apollo/other.ts'}
    },
  strapi: {
    url: process.env.STRAPI_URL || 'https://walrus-app-sbjbt.ondigitalocean.app',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
    },
  buildModules: [
      '@nuxtjs/vuetify'
  ],
  // alias: {
  //   "@": resolve(__dirname, "/")
  // },
})
