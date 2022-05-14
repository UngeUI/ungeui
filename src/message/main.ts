import messageConstructor from './message.vue'
import { createVNode, render } from 'vue'
const messageTypes = ['success', 'danger', 'info', 'warning', 'warning']

const instances = [] //messageQueue
let seed = 1
const message = ({
  text,
  duration,
  zIndex,
  initOffset = 0,
  maxCount = Infinity,
  icon = 'info',
}) => {
  if (instances.length + 1 > maxCount) {
    //limit the max count of message dialog
    return
  }
  let varticalOffset = initOffset
  const id = `message_${seed++}`
  instances.forEach(({ vm }) => {
    varticalOffset += vm.el.offsetHeight + 16
  })
  varticalOffset += 16
  const container = document.createElement('div')
  const props = {
    offset: varticalOffset,
    text,
    id,
    icon,
    duration,
    zIndex,
    onClose: () => {
      close(id)
    },
    onDestroy: () => {
      destroy()
    },
  }
  const vm = createVNode(messageConstructor, props, null)

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
      const pos =
        parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16
      instances[i].vm.component.props.offset = pos
    }
  }
  const destroy = () => {
    render(null, container)
  }
  document.body.appendChild(container.firstElementChild)
}
const api = []
messageTypes.forEach((type) => {
  message[type] = (options) => {
    if (typeof options == 'string') {
      options = {
        text: options,
      }
    }
    message({
      ...options,
      icon: type,
    })
  }
})

export default message
