import LoadingBar from './loadingBar.tsx'
import { render, createVNode, ref, computed } from 'vue'

let seed = 0

let vm = null
const start = (props) => {
  // only one instance
  if (seed == 1) {
    return
  }
  seed = 1
  vm = createVNode(LoadingBar, props, null)
  const container = document.createElement('div')
  render(vm, container)
  document.body.appendChild(container.firstElementChild)
}
const end = () => {
  seed = 0
  vm.component.exposed.endWidth() // not good realization
}
const api = {
  start,
  end,
}
export default api
