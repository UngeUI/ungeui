/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-28 20:44:26
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-30 13:11:28
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path  = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  root: path.resolve(__dirname, 'example'),
  build: {
    rollupOptions:{
      input: './src/main.js'
    }
  }
})
