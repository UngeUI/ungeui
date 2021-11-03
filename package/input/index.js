/*
 * @Descripttion:
 * @Author: peterroe
 * @Date: 2021-11-03 10:15:35
 * @LastEditors: peterroe
 * @LastEditTime: 2021-11-03 10:17:26
 */
import Input from './src/input.jsx'
import { componentPrefix } from '../main.js'
Input.name = 'Input'

Input.install = (app) => {
    app.component(componentPrefix + Input.name, Input)
}

export default Input
