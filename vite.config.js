/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-28 20:44:26
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 13:02:41
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path  = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname, 'example'),
  build: {
    rollupOptions:{
      input: './src/main.js'
    }
  }
})
