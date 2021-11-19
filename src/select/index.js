import USelect from './select.vue'
import USelectOption from './selectOption.jsx'

USelect.name = 'USelect'
USelectOption.name = 'USelectOption'

USelect.install = (app) => {
    app.component(USelect.name, USelect)
}
USelectOption.install = (app) => {
    app.component(USelectOption.name, USelectOption)
}

export {
    USelect,
    USelectOption
}