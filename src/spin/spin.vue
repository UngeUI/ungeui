<template>
  <div class="u-spin">
    <u-icon
      :color="color"
      :class="[spinSize, { 'u-spin-rotate': $slots.default }]"
    >
      <slot>
        <spinLogo />
      </slot>
    </u-icon>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import UIcon from '../icon/index'
import spinLogo from './utils/spinLogo.vue'
const spin = defineComponent({
  name: 'spin',
  components: {
    UIcon,
    spinLogo,
  },
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
    color: {
      type: String,
      default: '#13C2C2',
    },
  },
  setup(props, { slots }) {
    const spinSize = computed(() => {
      return 'u-spin-size-' + props.size
    })

    return {
      spinSize,
    }
  },
})

export default spin
</script>
