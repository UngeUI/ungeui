import Icon from './src/icon.jsx'

Icon.name = 'Icon'

Icon.install = (app) => {
    app.component(Icon.name, Icon)
}

export default Icon