import { defineComponent, computed } from 'vue'

export const badge = defineComponent({
  name: 'badge',
  props: {
    value: {
      type: [String, Number],
    },
    color: {
      type: String,
      default: '#FF4D4F',
    },
    max: {
      type: Number,
    },
    min: {
      type: Number,
      default: 0,
    },
    hideLowerLimit: {
      type: Boolean,
      default: false,
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const supStyle = computed(() => {
      return {
        'background-color': props.color,
        display:
          props.value <= props.min && props.hideLowerLimit
            ? 'none'
            : 'inline-flex',
      }
    })
    const filterValue = computed(() => {
      if (props.value > props.max) {
        return props.max + '+'
      } else if (props.value < props.min) {
        return props.min
      } else {
        return props.value
      }
    })
    const supClass = computed(() => {
      return props.dot ? 'u-badge-dot' : 'u-badge-round'
    })
    return () => (
      <div class={['u-badge']}>
        {slots.default?.()}
        <sup class={['u-badge-sup', supClass.value]} style={supStyle.value}>
          {props.dot || filterValue.value}
        </sup>
      </div>
    )
  },
})

export default badge
