import { defineComponent,computed } from 'vue'
import UIcon from '../icon/index'
import CDown from './util/ChevronDown.vue'
const select = defineComponent({
    name: 'select',
    components:{
        UIcon
    },
    props: {
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['small','meduim','large'].includes(value)
            }
        }
    },
    setup(props) {
        const selectSize = computed(() => {
            return 'u-select-size-' + props.size
        })

        return () => (
            <div class={['u-select',selectSize.value]}>
                <div class={['u-select-text']}>请选择</div>
                <div class={['u-select-icon']}>
                    <u-icon size={25} color="#bbb">
                        <CDown/>
                    </u-icon>
                </div>
            </div>
        )
    }
})

export default select