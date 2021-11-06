import '../styles/index.styl'

import UTag from './Tag/index'
import UAvatar from './avatar/index'
import UButton from './button/button.jsx';
import UDivider from './divider/divider.jsx'
import UIcon from './icon/icon.jsx'
import UInput from './input/input.jsx'

const components = [UTag,UButton,UAvatar,UDivider,UIcon,UInput]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}


export { 
    install,
    UButton,
    UTag,
    UAvatar,
    UDivider,
    UIcon,
    UInput
};