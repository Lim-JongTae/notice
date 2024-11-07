// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {      
      htmlAttrs: {
        lang: 'en'
      }, 
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'png', type: 'image/x-icon', href: '/leaf.png' }
      ]
    }
  },
  modules: ['@nuxt/fonts', '@nuxt/ui', '@nuxt/image'],
  css: [ '~/assets/css/global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})