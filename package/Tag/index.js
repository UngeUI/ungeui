/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-28 20:23:18
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 12:52:15
 */
import Tag from './src/index.vue'

Tag.name = 'Tag'

Tag.install = (app) =>{
    app.component('U'+Tag.name,Tag)
}

export default Tag