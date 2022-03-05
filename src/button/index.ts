import Button from './button'

Button.name = 'UButton'

Button.install = (app) => {
  app.component(Button.name, Button)
}

export default Button
