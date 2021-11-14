<template>
    <transition 
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp">
        <div v-show="visible" :class="['u-message',messageType]">
            hello message 
            {{text}}
            
        </div>
    </transition>
</template>

<script setup>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
const props = defineProps({
    text: {
        type: String,
        default: ""
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
const messageType = computed(() => {
    return 'u-message-' + props.type
})
const {stop} = useTimeoutFn(() => {
    visible.value = false
},3000)
</script>