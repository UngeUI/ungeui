import Space from './space.tsx'
import { App } from 'vue'

Space.name = 'USpace'

Space.install = (app: App) => {
  app.component(Space.name, Space)
}

export default Space
