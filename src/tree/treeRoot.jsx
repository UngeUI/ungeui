import { defineComponent, h, ref, computed, reactive, provide } from 'vue';
import TreeContent from './treeContent.jsx'
import Tree from './tree.jsx'

const TreeRoot = defineComponent({
    name: 'TreeRoot',
	props: {
        data: { type: Array },
		checkable: { type: Boolean, default: false }
	},
	setup(props, { slots }) {
        const onChangeState = (value) => {
            console.log(value)
        }
        provide('rootDate', {
            onChangeState
        })
		return () => (
			<Tree
                {...props}
            />
		)
	}
	   
});

export default TreeRoot;