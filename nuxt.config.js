export default {
  colorMode: {
    classSuffix: '',
  },

  ssr: false,
  target: 'static',
  head: {
    title: 'nuxt-tailwind-typography-darkmode-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  modules: ['@nuxt/content'],
}
