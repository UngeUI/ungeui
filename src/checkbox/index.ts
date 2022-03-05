import UCheckbox from './checkbox.tsx'
import UCheckboxGroup from './checkboxGroup.tsx'
import { App } from 'vue'

UCheckbox.name = 'UCheckbox'
UCheckboxGroup.name = 'UCheckboxGroup'

UCheckbox.install = (app: App) => {
  app.component(Ucheckbox.name, Ucheckbox)
}
UCheckboxGroup.install = (app: App) => {
  app.component(UCheckboxGroup.name, UCheckboxGroup)
}

export { UCheckbox, UCheckboxGroup }
