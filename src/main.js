import components from './components.js'

const componentPrefix = 'U'

const install = (app) => {
    components.forEach(item => {
        app.component(componentPrefix + item.name ,item.component)
    })
}

export default install