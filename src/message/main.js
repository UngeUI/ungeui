import messageConstructor from './message.vue'
import { createVNode, render } from 'vue'
const messageTypes = ['success', 'danger', 'info', 'warning', 'warning']

const instances = [] //messageQueue

const message = ({ message, type }) => {

    const container = document.createElement('div')
    const vm = createVNode(
        messageConstructor, {
            text: message,
            type
        },
        null
    )
    render(vm, container)
        // instances.push({ vm })
        // setTimeout(() => {
        //     render(null, container)
        // }, 3000)
    document.body.appendChild(container.firstElementChild)
}
let api = []
messageTypes.forEach(type => {
    api[type] = (options = {}) => {
        if (typeof options == 'string') {
            options = {
                message: options
            }
        }
        message({
            ...options,
            type
        })
    }
})

export default api