<template>
    <transition 
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
    @before-leave="$emit('close')"
    @after-leave="$emit('destroy')">
        <div v-show="visible" :style="customStyle" :class="['u-message',messageType]">
            <u-icon :size="18" :style="{marginRight:'5px'}">
                <Success v-if="type == 'success'"/>
                <Danger v-if="type == 'danger'" />
                <Warning v-if="type == 'warning'" />
                <Info v-if="type == 'info'" />
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
    type: {
        type: String,
        default: 'info',
        validator(value) {
            return ['success','info','warning','danger'].includes(value)
        }
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