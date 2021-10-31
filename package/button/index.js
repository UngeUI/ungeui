import Button from './src/button.jsx'

Button.name = 'Button'

Button.install = (app) => {
    app.component(Button.name,Button)
}

export default Button