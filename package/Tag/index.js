import Tag from './src/index.vue'
import { componentPrefix } from '../main.js'

Tag.name = 'Tag'

Tag.install = (app) => {
  app.component(componentPrefix + Tag.name, Tag)
}

export default Tag
