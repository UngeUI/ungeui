import USwitch from './switch.tsx'
import { App } from 'vue'

USwitch.name = 'USwitch'

USwitch.install = (app: App) => {
  app.component(USwitch.name, Uswitch)
}

export default USwitch
