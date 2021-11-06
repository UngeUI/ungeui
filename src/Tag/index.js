/*
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-04 23:25:41
 * @LastEditors: peterroe
 * @LastEditTime: 2021-11-05 22:15:19
 */
import Tag from './index.vue'

Tag.name = 'UTag'

Tag.install = (app) => {
    app.component(Tag.name, Tag)
}

export default Tag