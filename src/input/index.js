import Input from './input.jsx'
Input.name = 'UInput'

Input.install = (app) => {
    app.component(Input.name, Input)
}

export default Input