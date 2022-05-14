import { defineComponent, provide } from 'vue'
import Tree from './tree.tsx'

const TreeRoot = defineComponent({
  name: 'TreeRoot',
  props: {
    data: { type: Array },
    checkedKeys: { type: Array },
    checkable: { type: Boolean, default: false },
  },
  emits: ['update:checked-keys', 'update:checkedKeys'],
  setup(props, { emit }) {
    const checkedValueArr = []
    const onCheckedChange = (value) => {
      const index = checkedValueArr.findIndex((item) => value == item)
      if (index != -1) {
        checkedValueArr.splice(index, 1)
      } else {
        checkedValueArr.push(value)
      }
      emit('update:checkedKeys', [...checkedValueArr])
    }
    provide('rootData', {
      onCheckedChange,
    })
    return () => <Tree {...props} />
  },
})

export default TreeRoot
