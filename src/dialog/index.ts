import UDialog from './dialog.vue'
import { App } from 'vue'
UDialog.name = 'UDialog'

UDialog.install = (app: App) => {
  app.component(UDialog.name, UDialog)
}

export default UDialog
