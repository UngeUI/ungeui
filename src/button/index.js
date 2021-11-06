import Button from './src/button.jsx'
Button.name = 'UButton'

Button.install = (app) => {
    app.component(Button.name, Button)
}

export default Button