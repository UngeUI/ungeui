/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-29 11:55:00
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 13:03:57
 */
import unge from '../package/main.js'
import App from '../package/App.vue'
import {createApp} from 'vue'

const app = createApp(App)
app.use(unge)
app.mount('#app')