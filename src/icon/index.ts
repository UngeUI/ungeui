import Icon from './icon.tsx'
import { App } from 'vue'

Icon.name = 'UIcon'

Icon.install = (app: App) => {
  app.component(Icon.name, Icon)
}

export default Icon
