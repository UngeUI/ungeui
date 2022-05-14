import { defineComponent, computed, ref, inject } from 'vue'
import Arrow from './util/arrow.vue'
import { UCheckbox } from '../checkbox/index'

const treeNode = defineComponent({
    name: 'treeNode',
    props: {
        label: { type: String },
        value: { },
        showArrow: { type: Boolean },
        checkable: { type: Boolean, default: false },
		onArrowChange:{ type: Function },
		onCheckedChange:{ type: Function }
    },
    setup(props) {

        // 箭头向下（false）/向右（true）的状态
        const arrowState = ref(false)
        const isArrowClose = computed(() => {
            return arrowState.value ? 'u-tree-node-switcher-close' : ''
        })
        const switcherStateChange = () => {
			props.onArrowChange(arrowState.value)
            arrowState.value = !arrowState.value
        }
        //如果没有孩子，应该隐藏箭头
        const isArrowHidden = computed(() => {
            return props.showArrow ? '' : 'u-tree-node-switcher-hidden'
        })

        const rootData = inject('rootData', null)
		//多选框选中/非选中的状态
        const checkValue = ref(false)
        const onUpdateChecked = (value) => {
            checkValue.value = value
			rootData.onCheckedChange(props.value)
        }
        return () => (
            <li class="u-tree-node">
                <Arrow
                    class={[
                        "u-tree-node-switcher",
                        isArrowClose.value,
                        isArrowHidden.value
                    ]}
                    onClick={switcherStateChange}
                />
                {props.checkable && (
                    <UCheckbox
                        checked={checkValue.value}
                        onUpdate:checked={onUpdateChecked}
                    />
                )}
                <span class="u-tree-node-text">{props.label}</span>
            </li>
        )

    }
})

export default treeNode

/*
 * 点击某个节点，其以下节点会全部选中，以上节点会全部选中
 */