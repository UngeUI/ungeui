import URadio from './radio.tsx';
import URadioGroup from './radioGroup.tsx';
import URadioButton from './radioButton.tsx';
import { App } from 'vue';

URadio.name = 'URadio';
URadioGroup.name = 'URadioGroup';
URadioButton.name = 'URadioButton';

URadio.install = (app: App) => {
    app.component(URadio.name, URadio);
};
URadioGroup.install = (app: App) => {
    app.component(URadioGroup.name, URadioGroup);
};
URadioButton.install = (app: App) => {
    app.component(URadioButton.name, URadioButton);
};

export { URadio, URadioGroup, URadioButton };
