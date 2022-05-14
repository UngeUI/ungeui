import UTable from './table.vue'
import { App } from 'vue'

UTable.name = 'UTable'

UTable.install = (app: App) => {
  app.component(UTable.name, UTable)
}

export default UTable
