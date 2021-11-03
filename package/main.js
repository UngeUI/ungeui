/*
 * @Descripttion:
 * @Author: peterroe
 * @Date: 2021-10-28 14:07:44
 * @LastEditors: peterroe
 * @LastEditTime: 2021-10-31 22:04:52
 */
import components from './components.js'

export const componentPrefix = 'U'
console.log(components)
const install = (app) => {
    components.forEach((component) => {
        app.component(componentPrefix + component.name, component)
    })
}

export default install
