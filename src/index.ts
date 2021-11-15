import { App } from 'vue';
import '../styles/index.styl';
// import 'animate.css/animate.min.css'

import UTag from './Tag/index';
import UAvatar from './avatar/index';
import UButton from './button/index';
import UDivider from './divider/index';
import UIcon from './icon/index';
import UInput from './input/index';
import { URadio, URadioGroup, URadioButton } from './radio/index';
import { UCheckbox, UCheckboxGroup } from './checkbox/index';
import USwitch from './switch/index';
import UDialog from './dialog/index.js'
import message from './message/main.js'
const components = [
    UTag,
    UButton,
    UAvatar,
    UDivider,
    UIcon,
    UInput,
    URadio,
    URadioGroup,
    URadioButton,
    UCheckbox,
    UCheckboxGroup,
    USwitch,
    UDialog
];

const install = (app: App): void => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};

export default install;

export {
    UButton,
    UTag,
    UAvatar,
    UDivider,
    UIcon,
    UInput,
    URadio,
    URadioGroup,
    URadioButton,
    UCheckbox,
    UCheckboxGroup,
    USwitch,
    UDialog,
    message
};
