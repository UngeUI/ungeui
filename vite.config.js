/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-28 20:44:26
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-28 21:35:01
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path  = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions:{
      input: './src/main.js'
    }
  }
})
