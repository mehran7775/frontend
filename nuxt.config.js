import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - دمیرکو - مشاوره و فروش ماشین آلات صنعتی',
    title: 'دمیرکو - مشاوره و فروش ماشین آلات صنعتی',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'دمیرکو سایت خرید و فروش محصولات صنعتی'
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'wzWhJaqpQniEGJwWeIMISdhq0AnDmqeTZ-tDFBpBB6Q'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, ],
    script: [{
      src: "https://www.google-analytics.com/analytics.js",
      async: true,
      crossorigin: "anonymous"
    }, ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/gtm',
    '@nuxtjs/sentry',
    '@nuxtjs/auth'
  ],
  gtm: {
    id: 'UA-194863487-1'
  },
  sentry: {
    dsn: 'http://9929e75c2feb48f58df0e17648403d7a@sentry.homeca.ir:9000/11', // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL || 'http://127.0.0.1:8000',
    browserBaseURL: process.env.API_URL_BROWSER || 'http://127.0.0.1:8000',
    headers : {
      common: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
    }
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fa-IR'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    rtl: true,
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  loading: {
    color: 'blue',
    height: '2px'
  },
  styleResources: {
    scss: [
      'assets/scss/_variables.scss'
    ]
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_API_URL || 'http://127.0.0.1:8000',
  //   }
  // },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.BASE_API_URL || 'http://127.0.0.1:8000',
  //   }
  // },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token'
        },
        user: {
          user: 'user',
        },
        endpoints: {
          login: {
            url: '/signin',
            method: 'post',
          },
          // logout: false,
          logout: {
            url: '/logout',
            method: 'post'
          },
          user: {
            url: '/user',
            method: 'get'
          }
        },

      }
    }
  },
}
