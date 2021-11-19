import USelect from './select.jsx'

USelect.name = 'USelect'

USelect.install = (app) => {
    app.component(USelect.name, USelect)
}

export default USelect