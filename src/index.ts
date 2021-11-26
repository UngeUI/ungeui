import { App } from 'vue';
import '../styles/index.styl';

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
import { USelect, USelectOption } from './select/index';
import UTable from './table/index.js'
import UPagination from './pagination/index';
import USlider from './slider/index.js'
import UInputNumber from './inputNumber/index.js'
import USpace from './space/index.js'
import UTooltip from './tooltip/index.js'
//ImportFlag

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
    UDialog,
    USelect,
    USelectOption,
    UTable,
    UPagination,
    USlider,
	UInputNumber,
	USpace,
	UTooltip,
	//ArrayFlag
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
    USelect,
    USelectOption,
    UTable,
    UPagination,
    message,
    USlider,
	UInputNumber,
	USpace,
	UTooltip,
	//ExportFlag
};
