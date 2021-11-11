import UCheckbox from './checkbox.jsx'
import UCheckboxGroup from './checkboxGroup.jsx'

UCheckbox.name = 'UCheckbox'
UCheckboxGroup.name = 'UCheckboxGroup'

UCheckbox.install = (app) => {
    app.component(Ucheckbox.name, Ucheckbox)
}
UCheckboxGroup.install = (app) => {
    app.component(UCheckboxGroup.name, UCheckboxGroup)
}

export {
    UCheckbox,
    UCheckboxGroup
}