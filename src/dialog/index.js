import UDialog from './dialog.vue'

UDialog.name = 'UDialog'

UDialog.install = (app) => {
    app.component(UDialog.name, UDialog)
}

export default UDialog