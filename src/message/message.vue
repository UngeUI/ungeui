<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
    @before-leave="$emit('close')"
    @after-leave="$emit('destroy')"
  >
    <div v-show="visible" :style="customStyle" class="u-message-wrapper">
      <div :class="['u-message-core', messageType]">
        <u-icon :size="18" :style="{ marginRight: '5px' }">
          <component :is="iconComponent"></component>
        </u-icon>
        {{ text }}
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import UIcon from '../icon/index'
import { useTimeoutFn } from '@vueuse/core'
import Success from './util/success.vue'
import Danger from './util/danger.vue'
import Warning from './util/warning.vue'
import Info from './util/info.vue'
const props = defineProps({
  text: {
    type: [String, Boolean, Number],
    default: '',
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
  duration: {
    type: Number,
    default: 3000,
  },
  zIndex: {
    type: Number,
    default: 300,
  },
})
const visible = ref(false)
onMounted(() => {
  visible.value = true
})
const { stop } = useTimeoutFn(() => {
  visible.value = false
}, props.duration)

const messageType = computed(() => {
  return 'u-message-' + props.icon
})

const customStyle = computed(() => ({
  top: props.offset + 'px',
  'z-index': props.zIndex,
}))
const iconMap = {
  success: Success,
  danger: Danger,
  info: Info,
  warning: Warning,
}
const iconComponent = computed(() => {
  console.log(props.icon, 'props.icon')
  if (typeof props.icon == 'string') {
    return iconMap[props.icon] || ''
  } else {
    return props.icon
  }
})
</script>
