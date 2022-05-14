import Spin from './spin.vue'

Spin.name = 'USpin'

Spin.install = (app: App) => {
  app.component(Spin.name, Spin)
}

export default Spin
