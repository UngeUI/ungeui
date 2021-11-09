import URadio from './radio.jsx'
import URadioGroup from './radioGroup.jsx'
import URadioButton from './radioButton.jsx'

URadio.name = 'URadio'
URadioGroup.name = 'URadioGroup'
URadioButton.name = 'URadioButton'

URadio.install = (app) => {
    app.component(URadio.name, URadio)
}
URadioGroup.install = (app) => {
    app.component(URadioGroup.name, URadioGroup)
}
URadioButton.install = (app) => {
    app.component(URadioButton.name, URadioButton)
}

export {
    URadio,
    URadioGroup,
    URadioButton
}