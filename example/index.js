/*
 * @Descripttion:
 * @Author: peterroe
 * @Date: 2021-10-29 11:55:00
 * @LastEditors: peterroe
 * @LastEditTime: 2021-10-31 22:04:26
 */
import unge from '../package/main.js'
import App from './App.vue'
import { createApp } from 'vue'
import '../styles/index.styl'
const app = createApp(App)
app.use(unge)
app.mount('#app')
