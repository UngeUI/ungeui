import { ref, onMounted, getCurrentInstance } from 'vue'

export default (el) => {
    const isHovered = ref()
    onMounted(() => {
        const target = getCurrentInstance().ctx.$el.nextSibling.nextSibling
        target.addEventListener('mouseenter', () => {
            isHovered.value = true
        })
        target.addEventListener('mouseleave', () => {
            isHovered.value = false
        })
    })
    return {
        isHovered
    }
}