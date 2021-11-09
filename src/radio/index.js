import URadio from './radio.jsx'
import URadioGroup from './radioGroup.jsx'

URadio.name = 'URadio'
URadioGroup.name = 'URadioGroup'

URadio.install = (app) => {
    app.component(URadio.name, URadio)
}
URadioGroup.install = (app) => {
    app.component(URadioGroup.name, URadioGroup)
}

export {
    URadio,
    URadioGroup
}