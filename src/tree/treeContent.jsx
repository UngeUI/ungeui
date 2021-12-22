import { defineComponent, computed, ref } from 'vue'
import TreeNode from './treeNode.jsx'
import Tree from './tree.jsx'

const treeContent = defineComponent({
    name: 'treeContent',
    props: {
        data: { type: Object },
        checkable: { type: Boolean }
    },
    emits:['change'],
    setup(props, { emit }) {

        //箭头向右则隐藏子节点
        const arrowState = ref(false)
        const isTreeHidden = computed(() => {
            return arrowState.value ? 'u-tree-hidden' : ''
        })

        //箭头通过父接节点将状态发送到兄弟节点
        const onArrowChange = () => {
            arrowState.value = !arrowState.value
        }
        //选中多选当前框，所有父和子节点全部要选中
        const onCheckedChange = (value) => {
            console.log(value)
        }
        return () => (
            <>
                <TreeNode 
                    label={props.data.title}
                    value={props.data.key}
                    showArrow={props.data.children && props.data.children.length != 0}
                    checkable={props.checkable}
                    onArrowChange={onArrowChange}
                    onCheckedChange={onCheckedChange}
                />
                {/* 没有孩子则不渲染 */}
                {props.data.children && (
                    <Tree
                        checkable={props.checkable}
                        data={props.data.children}
                        class={[
                            isTreeHidden.value
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
