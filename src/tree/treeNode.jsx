import { defineComponent, computed, ref } from 'vue'
import Arrow from './util/arrow.vue'

const treeNode = defineComponent({
    name: 'treeNode',
    props: {
        text: {
            type: String
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

        return () => (
            <li class="u-tree-node">
                <Arrow 
                    class={[
                        "u-tree-node-switcher",
                        switcherState.value
                    ]}
                    onClick={switcherStateChange}
                />
                <span class="u-tree-node-text">{props.text}</span>
            </li>
        )
        
    }
})

export default treeNode