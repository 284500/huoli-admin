// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  modules: [
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
  ],
  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 2 * 365 * 24 * 60 * 60 * 1000
    },
    storage: 'sessionStorage'
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  nitro: {
    devProxy: {
      '/api': {
        target: 'http://192.168.10.103:8084',
        changeOrigin: true,
      },
      '/admin': {
        target: 'http://192.168.10.103:8082',
        changeOrigin: true,
      },
      '/test': {
        target: 'http://192.168.0.103:8084',
        changeOrigin: true,
      },
    },
  },

  tailwindcss: {
    exposeConfig: true,
  },

  colorMode: {
    classSuffix: '',
  },

  typescript: {
    shim: false,
  },

  imports: {
    imports: [
      {
        from: 'tailwind-variants',
        name: 'tv',
      },
      {
        from: 'tailwind-variants',
        name: 'VariantProps',
        type: true,
      },
    ],
    dirs: ["stores/**/index.{ts,js,mjs,mts}"]
  },

});
