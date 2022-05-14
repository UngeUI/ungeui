import USelect from './select.vue'
import USelectOption from './selectOption.tsx'
import { App } from 'vue'

USelect.name = 'USelect'
USelectOption.name = 'USelectOption'

USelect.install = (app: App) => {
  app.component(USelect.name, USelect)
}
USelectOption.install = (app: App) => {
  app.component(USelectOption.name, USelectOption)
}

export { USelect, USelectOption }
