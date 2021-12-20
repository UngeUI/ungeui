import { defineComponent, computed, ref } from 'vue'
import Arrow from './util/arrow.vue'
import { UCheckbox } from '../checkbox/index'

const treeNode = defineComponent({
    name: 'treeNode',
    props: {
        text: { type: String },
        showArrow: { type: Boolean },
        checkable: { type: Boolean, default: false }
    },
    emits:['change'],
    setup(props, { emit }) {

        // the direction state of arrow
        const state = ref(false)
        const switcherState = computed(() => {
            return state.value ? 'u-tree-node-switcher-close' : ''
        })
        const switcherStateChange = () => {
            emit('change', state.value)
            state.value = !state.value
        }

        //if it has no children, we should hidden the arrow
        const switcherVisibleState = computed(() => {
            return props.showArrow ? '' : 'u-tree-node-switcher-hidden'
        })

        const checkValue = ref(false)
        const onUpdateChecked = (value) => {
            checkValue.value = value
        }
        return () => (
            <li class="u-tree-node">
                <Arrow
                    class={[
                        "u-tree-node-switcher",
                        switcherState.value,
                        switcherVisibleState.value
                    ]}
                    onClick={switcherStateChange}
                />
                {props.checkable && (
                    <UCheckbox
                        checked={checkValue.value}
                        onUpdate:checked={onUpdateChecked}
                    />
                )}
                <span class="u-tree-node-text">{props.text}</span>
            </li>
        )

    }
})

export default treeNode

/*
 * 点击某个节点，其以下节点会全部选中，以上节点会全部选中
 */