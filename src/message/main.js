import messageConstructor from './message.jsx'
import { createVNode, render } from 'vue'
const messageTypes = ['success', 'danger', 'info', 'warning', 'warning']

const instances = [] //messageQueue

const message = ({ text, type }) => {

    const container = document.createElement('div')
    const vm = createVNode(
        messageConstructor, {
            text,
            type
        },
        null
    )
    render(vm, container)
        // instances.push({ vm })
    setTimeout(() => {
        render(null, container)
    }, 3000)
    document.body.appendChild(container.firstElementChild)
}
let api = []
messageTypes.forEach(type => {
    api[type] = (text) => {
        message({
            text,
            type
        })
    }
})

export default api