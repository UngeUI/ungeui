/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-28 14:07:44
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-30 11:19:28
 */
import components from './components.js'

export const componentPrefix = 'U'
console.log(components)
const install = (app) => {
    components.forEach(component => {
        app.component(componentPrefix + component.name ,component)
    })
}

export default install