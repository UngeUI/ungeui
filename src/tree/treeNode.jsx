import { defineComponent, computed, ref } from 'vue'
import Arrow from './util/arrow.vue'

const treeNode = defineComponent({
    name: 'treeNode',
    props: {
        text: {
            type: String
        },
        showArrow: {
            type: Boolean
        }
    },
    emits:['change'],
    setup(props, { emit }) {

        const state = ref(false)
        const switcherState = computed(() => {
            return state.value ? 'u-tree-node-switcher-close' : ''
        })
        const switcherStateChange = () => {
            emit('change', state.value)
            state.value = !state.value
        }

        const switcherVisibleState = computed(() => {
            return props.showArrow ? '' : 'u-tree-node-switcher-hidden'
        })

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
                <span class="u-tree-node-text">{props.text}</span>
            </li>
        )
        
    }
})

export default treeNode