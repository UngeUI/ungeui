import { defineComponent, provide, reactive } from 'vue'

const radioGroup = defineComponent({
  name: 'RadioGroup',
  props: ['value'],
  emits: ['update:value'],
  setup(props, { slots, emit }) {
    const onRadioChange = (e) => {
      emit('update:value', e)
    }
    provide(
      'radioGroupContext',
      reactive({
        onRadioChange,
        props,
      }),
    )
    return () => <div class="u-radio-group">{slots.default?.()}</div>
  },
})

export default radioGroup
