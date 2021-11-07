import URadio from './radio.jsx'
import URadioGroup from './radioGroup.jsx'
import { App } from 'vue'

URadio.name = 'URadio'
URadioGroup.name = 'URadioGroup'

URadio.install = (app: App): void => {
    app.component(URadio.name, URadio)
}
URadioGroup.install = (app: App): void => {
    app.component(URadioGroup.name, URadioGroup)
}

export {
    URadio,
    URadioGroup
}