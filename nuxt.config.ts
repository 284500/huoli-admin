// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt'],
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
        target: 'http://127.0.0.1:8084',
        changeOrigin: true,
      },
      '/test': {
        target: 'http://192.168.0.106:8084',
        changeOrigin: true,
      },
    },
  },
});
