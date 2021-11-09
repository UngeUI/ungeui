import { App } from 'vue'
import s from '../styles/index.styl'
import UTag from './Tag/index'
import UAvatar from './avatar/index'
import UButton from './button/button.jsx';
import UDivider from './divider/divider.jsx'
import UIcon from './icon/icon.jsx'
import UInput from './input/input.jsx'
import { URadio, URadioGroup} from './radio/index.js'

const components = [UTag,UButton,UAvatar,UDivider,UIcon,UInput,URadio,URadioGroup]


const install = (app: App): void => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default install

export {
    UButton,
    UTag,
    UAvatar,
    UDivider,
    UIcon,
    UInput,
    URadio,
    URadioGroup
};