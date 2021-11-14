<template>
    <transition 
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
    @before-leave="$emit('close')"
    @after-leave="$emit('destroy')">
        <div v-show="visible" :style="customStyle" :class="['u-message',messageType]">
            <u-icon :size="18" :style="{marginRight:'5px'}">
                <component :is="iconComponent"></component>
            </u-icon>
            {{text}}
        </div>
    </transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import  UIcon from '../icon/index.js'
import { useTimeoutFn } from '@vueuse/core'
import Success from './util/success.vue'
import Danger from './util/danger.vue'
import Warning from './util/warning.vue'
import Info from './util/info.vue'
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
    icon: {
        type: [String, Object],
        default: 'info',
    },
    duration:{
        type: Number,
        default: 3000
    }
})
const visible = ref(false)
onMounted(() => {
    visible.value = true
})
const {stop} = useTimeoutFn(() => {
    visible.value = false
},props.duration)

const messageType = computed(() => {
    return 'u-message-' + props.icon
})

const customStyle = computed(() => ({
    top: props.offset + 'px'
}))
const iconMap = {
    'success': Success,
    'danger': Danger,
    'info': Info,
    'warning': Warning,
}
const iconComponent = computed(() => {
    console.log(props.icon,'props.icon')
    if(typeof props.icon == 'string') {
        return iconMap[props.icon] || ''
    } else {
        return props.icon
    }
})
</script>