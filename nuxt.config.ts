// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    { src: '~/plugins/ionic.js', mode: 'client' }
  ],
  build: {
    transpile: ['@ionic/vue', '@ionic/vue-router'],
  },
})
