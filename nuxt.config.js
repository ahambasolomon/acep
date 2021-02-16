export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aceprep',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,800&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/icon.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  styleResources: {
    scss: '@/assets/scss/_variables.scss'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {

  },
  env:{
    baseUrl: process.env.BASE_URL || 'https://acestest.herokuapp.com/api/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'https://acestest.herokuapp.com/api/login', method: 'post', propertyName: 'accessToken' },
          logout: { url: 'https://acestest.herokuapp.com/api/logout', method: 'post' },
          user: { url: 'https://acestest.herokuapp.com/api/userdata', method: 'get', propertyName: 'userdata' }
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        globalToken: true,
        autoFetchUser: true
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
