import Button from './button.tsx'

Button.name = 'UButton'

Button.install = (app) => {
  app.component(Button.name, Button)
}

export default Button
