// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vitePluginStylusAlias from 'vite-plugin-stylus-alias'
import app from './app.config'

export default defineNuxtConfig({
  app,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      vitePluginStylusAlias()  // 解决vite中Stylus无法使用@别名的问题
    ]
    // resolve: {
    //   alias: {
    //     // 调整别名，避免与 Stylus 中的命名冲突
    //     '@': '/src',
    //   },
    // },
  },
  css: [
    '~/assets/common/index.styl',
  ],
  devtools: { enabled: true },
})
