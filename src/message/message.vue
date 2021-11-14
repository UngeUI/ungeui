<template>
    <transition 
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
    @before-leave="$emit('close')"
    @after-leave="$emit('destroy')">
        <div v-show="visible" :style="customStyle" :class="['u-message',messageType]">
            hello message 
            {{text}}
        </div>
    </transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    offset: {
        type: Number,
    },
    id: {
        type: String,
    },
    type: {
        type: String,
        default: 'info'
    }
})
const visible = ref(false)
onMounted(() => {
    visible.value = true
})
const {stop} = useTimeoutFn(() => {
    visible.value = false
},3000)

const messageType = computed(() => {
    return 'u-message-' + props.type
})
console.log(props.offset,'ff')
const customStyle = computed(() => ({
    top: props.offset + 'px'
}))
</script>