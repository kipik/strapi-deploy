// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi'],
    strapi: {
      url: 'http://localhost:1338'
    },
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "@/assets/_colors.scss" as *;'
          }
        }
      }
    },
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { href: "https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,400;0,600;0,700;0,800;1,300&family=Merriweather:ital,wght@0,300;0,400;1,300;1,400&display=swap", rel: "stylesheet"}
      ]
    }
})

