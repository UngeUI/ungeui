import messageConstructor from './message.vue'
import { createVNode, render } from 'vue'
const messageTypes = ['success', 'danger', 'info', 'warning', 'warning']

const instances = [] //messageQueue
let seed = 1
const message = ({ message, type }) => {

    let varticalOffset = 0
    const id = `message_${seed++}`
    instances.forEach(({ vm }) => {
        varticalOffset += vm.el.offsetHeight + 16
    })
    varticalOffset += 16
    const container = document.createElement('div')
    const vm = createVNode(
        messageConstructor, {
            text: message,
            type: type,
            offset: varticalOffset,
            id: id,
            onClose: () => {
                close(id)
            },
            onDestroy: () => {
                destroy()
            }
        },
        null
    )
    render(vm, container)
    instances.push({ vm })
    const close = (id) => {
        const idx = instances.findIndex(({ vm }) => id === vm.component.props.id)
        console.log(idx, 'id', instances)
        if (idx == -1) {
            return
        }
        // const { vm } = instances[idx]
        const removedHeight = instances[idx].vm.el.offsetHeight
        instances.splice(idx, 1)

        const len = instances.length
        if (len < 1) return
        for (let i = idx; i < len; i++) {
            const pos = parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16
            instances[i].vm.component.props.offset = pos
        }
    }
    const destroy = () => {
        render(null, container)
    }
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