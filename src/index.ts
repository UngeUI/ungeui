/*
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-04 23:23:10
 * @LastEditors: peterroe
 * @LastEditTime: 2021-11-05 22:39:53
 */
import '../styles/index.styl'

import Button from './button/button.jsx';
import UTag from './Tag/index'

const components = [UTag]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}


export { Button,UTag };