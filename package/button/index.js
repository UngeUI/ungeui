import Button from './src/button.jsx'
import { componentPrefix } from '../main.js'
Button.name = 'Button'

Button.install = (app) => {
  app.component(componentPrefix + Button.name, Button)
}

export default Button
