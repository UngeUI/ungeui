import { ref, onMounted, getCurrentInstance } from 'vue'

export default (el) => {
    const left = ref()
    const top = ref()
    const width = ref()
    const height = ref()
    onMounted(() => {
        const target = getCurrentInstance().ctx.$el.nextSibling.nextSibling
        top.value = target.offsetTop
        left.value = target.offsetLeft
        width.value = target.offsetWidth
        height.value = target.offsetHeight
    })
    return {
        top,
        left,
        width,
        height
    }
}