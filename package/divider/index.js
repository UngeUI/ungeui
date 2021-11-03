import divider from './src/divider.jsx'
import { componentPrefix } from '../main.js'

divider.name = 'Divider'

divider.install = (app) => {
    app.component(componentPrefix + divider.name, divider)
}

export default divider
