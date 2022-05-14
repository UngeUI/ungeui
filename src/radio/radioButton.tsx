import { defineComponent, inject, computed } from 'vue'

const radioButton = defineComponent({
  name: 'RadioButton',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: [String, Number, Boolean],
  },
  setup(props, { slots }) {
    const radioGroupContext = inject('radioGroupContext', undefined)
    const checkState = computed(() => {
      return props?.checked || props?.value == radioGroupContext?.props?.value
    })

    return () => (
      <div
        onClick={() => {
          if (props.disabled) {
            return
          }
          radioGroupContext.onRadioChange(props?.value)
        }}
        class={[
          'u-radio-button',
          { 'u-radio-button-disabled': props.disabled },
          { 'u-radio-button-checked': checkState.value },
        ]}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export default radioButton
