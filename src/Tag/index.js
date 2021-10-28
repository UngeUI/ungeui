/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-28 20:23:18
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-28 21:36:52
 */
import Tag from './src/index.vue'

Tag.install = (app) =>{
    app.component(Tag.name,Tag)
}

export default Tag