import { defineComponent, h, ref, computed, reactive, provide } from 'vue';
import TreeContent from './treeContent.tsx'
import Tree from './tree.tsx'

const TreeRoot = defineComponent({
    name: 'TreeRoot',
	props: {
        data: { type: Array },
        checkedKeys: { type: Array },
		checkable: { type: Boolean, default: false }
	},
    emits: ['update:checked-keys', 'update:checkedKeys'],
	setup(props, { slots, emit }) {
        const checkedValueArr = new Array()
		const onCheckedChange = (value) => {
			const index = checkedValueArr.findIndex(item => value == item)
			if(index != -1) {
				checkedValueArr.splice(index, 1)
			} else {
				checkedValueArr.push(value)
			}
			emit('update:checkedKeys', [...checkedValueArr])
		}
		provide('rootData', {
			onCheckedChange
		})
		return () => (
			<Tree
                {...props}
            />
		)
	}
	   
});

export default TreeRoot;