import { defineComponent, computed, ref } from 'vue'
import TreeNode from './treeNode.jsx'
import Tree from './tree.jsx'

const treeContent = defineComponent({
    name: 'treeContent',
    props: {
        data: {
            type: Object
        },
        checkable: {
            type: Boolean
        }
    },
    emits:['change'],
    setup(props, { emit }) {
        const state = ref(false)
        const treeNodeState = computed(() => {
            return state.value ? 'u-tree-hidden' : ''
        })

        const treeNodeChange = () => {
            state.value = !state.value
        }

        return () => (
            <>
                <TreeNode 
                    text={props.data.title}
                    showArrow={props.data.children && props.data.children.length != 0}
                    checkable={props.checkable}
                    onChange={treeNodeChange}
                />
                {props.data.children && (
                    <Tree
                        checkable={props.checkable}
                        data={props.data.children}
                        class={[
                            treeNodeState.value
                        ]}
                    />
                )}
            </>
        )
    }
})

export default treeContent

/*
 * Because of the particularity of component recursion
 * We must pull of the sibling node TreeContent
 * to manage the state of them
 */
