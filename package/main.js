/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-28 14:07:44
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 12:51:56
 */
import components from './components.js'

const componentPrefix = 'U'

const install = (app) => {
    components.forEach(item => {
        app.component(componentPrefix + item.name ,item)
    })
}

export default install