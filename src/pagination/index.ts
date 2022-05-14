import UPagination from './pagination.tsx'
import { App } from 'vue'

UPagination.name = 'UPagination'

UPagination.install = (app: App) => {
  app.component(UPagination.name, UPagination)
}

export default UPagination
