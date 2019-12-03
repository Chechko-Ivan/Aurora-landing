export default {
  mode: 'spa',
  generate: {
    fallback: true
  },
  head: {
    title:
      'ООО "Секвойя" | Закупка и переработка отходов ПВХ на постоянной основе',
    htmlAttrs: {
      lang: 'ru',
      prefix: 'og: http://ogp.me/ns#'
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
        content:
          'Отходы ПВХ оконного профиля. Однослойная мебельная пленка. Подоконник ПВХ. Штапик ПВХ'
      },
      {
        property: 'og:site_name',
        content: 'Отходы ПВХ'
      },
      {
        property: 'og:title',
        content:
          'ООО "Секвойя" | Закупка и переработка отходов ПВХ на постоянной основе'
      },
      {
        property: 'og:image',
        content: 'https://othodi-pvh.ru/favicon/apple-touch-icon.png'
      },
      {
        property: 'og:description',
        content:
          'Отходы ПВХ оконного профиля. Однослойная мебельная пленка. Подоконник ПВХ. Штапик ПВХ'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        href: '/favicon/apple-touch-icon.png'
      },
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
      {
        rel: 'msapplication-TileColor',
        content: '#2d89ef'
      },
      {
        rel: 'theme-color',
        content: '#ffffff'
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
  plugins: [
    {
      src: '~/plugins/aos.js',
      ssr: false
    },
    '~/plugins/antdNotification.js',
    '~/plugins/ym.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-153612798-1'
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
    babel: {}
  }
}
