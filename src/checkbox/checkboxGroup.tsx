import { defineComponent, provide, reactive } from 'vue'

const checkboxGroup = defineComponent({
  name: 'checkboxGroup',
  props: {
    value: {
      type: Array,
      default: [],
    },
  },
  emits: ['update:value'],
  setup(props, { slots, emit }) {
    const onCheckboxChange = (childrenValue) => {
      const newArr = Array.from(props.value)
      const childrenIndex = newArr.findIndex((item) => item == childrenValue)
      if (childrenIndex == -1) {
        newArr.push(childrenValue)
      } else {
        newArr.splice(childrenIndex, 1)
      }
      emit('update:value', newArr)
    }
    provide(
      'checkboxGroupContent',
      reactive({
        props,
        onCheckboxChange,
      }),
    )
    return () => <div class="u-checkbox-group">{slots.default?.()}</div>
  },
})

export default checkboxGroup
