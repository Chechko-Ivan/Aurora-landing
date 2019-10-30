export default {
  mode: 'spa',
  head: {
    title: '"ООО СЕКВОЙЯ" Покупка вторсырья.',
    htmlAttrs: {
      lang: 'ru'
    },
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
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/favicon/safari-pinned-tab.svg'
      },
      { rel: 'msapplication-TileColor', content: '#2d89ef' },
      { rel: 'theme-color', content: '#ffffff' }
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
  plugins: [
    { src: '~/plugins/aos.js', ssr: false },
    '~/plugins/antdNotification.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
    babel: {
      // presets({ isServer }) {
      //   return [
      //     [
      //       '@nuxt/babel-preset-app',
      //       {
      //         targets: isServer
      //           ? { node: 'current' }
      //           : {
      //               browsers: [
      //                 'last 2 versions',
      //                 'not ie 11',
      //                 'not dead',
      //                 'not ie_mob 11',
      //                 'not op_mini all',
      //                 'not op_mob > 0',
      //                 'not and_qq > 0',
      //                 'not android > 0'
      //               ]
      //             }
      //       }
      //     ]
      //   ]
      // }
    }
  }
}
