import Badge from './badge.tsx'
import { App } from 'vue'

Badge.name = 'UBadge'

Badge.install = (app: App) => {
  app.component(Badge.name, Badge)
}

export default Badge
