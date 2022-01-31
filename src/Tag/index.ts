import Tag from './index.vue'
import { App } from 'vue'

Tag.name = 'UTag'

Tag.install = (app: App) => {
  app.component(Tag.name, Tag)
}

export default Tag
