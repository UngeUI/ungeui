import Tooltip from './tooltip.tsx'
import { App } from 'vue'

Tooltip.name = 'UTooltip'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
