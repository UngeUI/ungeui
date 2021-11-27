import { ref, onMounted, getCurrentInstance } from 'vue'

// const findElementNode = () => {
//     let target = getCurrentInstance().ctx.$el
//     console.log(getCurrentInstance(), 'target')
//     while (target && target.nodeType != 1) { //find element node
//         target = target.nextSibling
//     }
//     // console.log(target)
//     return target
// }

function usePosition(el) {
    const left = ref()
    const top = ref()
    const width = ref()
    const height = ref()
    onMounted(() => {
        const target = el.value
            // console.log(target, 'target')
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

function useTargetHover(el) {
    const isHovered = ref()
    onMounted(() => {
        const target = el.value
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

export {
    usePosition,
    useTargetHover
}