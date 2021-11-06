import divider from './divider.jsx'

divider.name = 'UDivider'

divider.install = (app) => {
    app.component(divider.name, divider)
}

export default divider