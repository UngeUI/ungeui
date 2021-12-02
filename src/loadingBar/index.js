import LoadingBar from './loadingBar.jsx';
import { render, createVNode, ref, computed } from 'vue'

let isEnd
let vm
let props = {}
const start = () => {
    console.log('start')

    vm = createVNode(
        LoadingBar,
        null,
        null
    )
    const container = document.createElement('div')
    render(vm, container)
    document.body.appendChild(container.firstElementChild)
}
const end = () => {
    vm.component.exposed.endWidth() // not good realization
}
const api = {
    start,
    end
}
export default api;