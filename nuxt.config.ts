// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vitePluginStylusAlias from 'vite-plugin-stylus-alias'
import app from './app.config'
import path from 'path'

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
      vitePluginStylusAlias(),  // 解决vite中Stylus无法使用@别名的问题
    ],
    css: {
      /**
       * 全域引入檔案
       * @see https://github.com/vitejs/vite/issues/832#issuecomment-763311431
       * @see https://stackoverflow.com/a/64504683/2252696
       * @see https://stackoverflow.com/a/74307563/2252696
       */
      preprocessorOptions: {
        stylus: {
          imports: [
            path.resolve(__dirname, "./assets/common/index.styl")
          ],
        }
      }
    },
  devtools: { enabled: true },
})
