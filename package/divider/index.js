import divider from './src/divider.jsx'

divider.name = 'Divider'

divider.install = (app) => {
    app.component(divider.name, divider)
}

export default divider