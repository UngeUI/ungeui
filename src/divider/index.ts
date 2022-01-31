import divider from './divider.tsx'
import { App } from 'vue'

divider.name = 'UDivider'

divider.install = (app: App) => {
  app.component(divider.name, divider)
}

export default divider
