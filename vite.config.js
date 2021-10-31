/*
 * @Descripttion:
 * @Author: peterroe
 * @Date: 2021-10-28 20:44:26
 * @LastEditors: peterroe
 * @LastEditTime: 2021-10-31 22:05:01
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  root: path.resolve(__dirname, 'example'),
  build: {
    rollupOptions: {
      input: './src/main.js'
    }
  }
})
