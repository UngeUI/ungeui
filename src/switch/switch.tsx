import { defineComponent, computed } from 'vue'

const Switch = defineComponent({
  name: 'u-switch',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large']
      },
    },
    checked: {
      type: [Boolean, String, Number],
      default: false,
    },
    checkedValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    uncheckedValue: {
      type: [Boolean, String, Number],
      default: false,
    },
  },
  emits: ['update:checked', 'change'],
  setup(props, { emit }) {
    const switchSize = computed(() => {
      return 'u-switch-size-' + props.size
    })
    const isChecked = computed(() => {
      return props.checked == props.checkedValue ? 'u-switch-checked' : ''
    })
    const onClick = (e) => {
      console.log(
        'value:',
        props.checked,
        props.uncheckedValue,
        props.checkedValue,
      )
      emit(
        'update:checked',
        props.checked == props.checkedValue
          ? props.uncheckedValue
          : props.checkedValue,
      )
      emit('change', e)
    }
    return () => (
      <div
        onClick={onClick}
        class={['u-switch', switchSize.value, isChecked.value]}
      >
        <div class={['u-switch-circle']}></div>
      </div>
    )
  },
})

export default Switch
