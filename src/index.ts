/*
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-04 23:23:10
 * @LastEditors: peterroe
 * @LastEditTime: 2021-11-06 13:36:01
 */
import '../styles/index.styl'

import UTag from './Tag/index'
import UAvatar from './avatar/index'
import UButton from './button/button.jsx';

const components = [UTag,UButton,UAvatar]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}


export { 
    install,
    UButton,
    UTag,
    UAvatar
};