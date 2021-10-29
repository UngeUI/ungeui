/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-29 11:55:00
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 12:45:41
 */
import unge from './main.js'
import {createApp} from 'vue'
import App from './App.vue'
import cp from './Tag/src/index.vue'
const app = createApp(App)
app.use(unge)
// app.component('UTag',cp)
app.mount('#app')
console.log(unge)