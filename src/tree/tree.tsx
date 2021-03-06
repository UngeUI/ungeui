import { defineComponent } from 'vue'
import TreeContent from './treeContent.tsx'

const Tree = defineComponent({
  name: 'tree',
  props: {
    data: { type: Array },
    checkable: { type: Boolean, default: false },
  },
  emits: ['checkedChange'],
  setup(props) {
    return () => (
      <ul class="u-tree">
        {props.data.map((item) => {
          return <TreeContent data={item} checkable={props.checkable} />
        })}
      </ul>
    )
  },
})

export default Tree
