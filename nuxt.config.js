export default {
  mode: 'universal',
  head: {
    title: '"ООО СЕКВОЙЯ" Покупка вторсырья.',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  loading: {
    color: '#F16922'
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/style/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
    babel: {
      // plugins: [
      //   [
      //     'import',
      //     {
      //       libraryName: 'ant-design-vue',
      //       libraryDirectory: 'es',
      //       style: 'css'
      //     }
      //   ]
      // ]
    }
  }
}
