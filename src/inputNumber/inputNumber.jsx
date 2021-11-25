import { defineComponent,computed } from 'vue';
import UInput from '../input/index'
import Minus from './util/Minus.vue'
import Plus from './util/Plus.vue'

const inputNumber = defineComponent({
    name: 'inputNumber',
    props: {
        size: {
            type: String,
            default: 'medium'
        },
        value: {
            type: Number,
            default: 0
        }
    },
    emits:['update:value', 'input','increase','decrease'],
    setup(props, { slots,emit }) {
        const inputNumberSize = computed(() => {
            return 'u-input-number-size-' + props.size
        })
        const onValueChange = (value) => {
            emit('change',value)
            emit('update:value',value)
        }
        const decreaseValue = () => {
            emit('decrease',props.value - 1)
            emit('update:value', props.value - 1)
        }
        const increaseValue = () => {
            emit('increase',props.value + 1)
            emit('update:value', props.value + 1)
        }
        return () =>  (
            <div class={["u-input-number",inputNumberSize.value]}>
                <span 
                    onClick={decreaseValue}
                    class="u-input-number-box u-input-number-decrease"
                >
                    <Minus />
                </span>
                <UInput 
                    size={props.size}
                    value={props.value}
                    onUpdate:value={onValueChange}
                />
                <span 
                    onClick={increaseValue}
                    class="u-input-number-box u-input-number-increase"
                >
                    <Plus/>
                </span>
            </div>
        )
    }
       
});

export default inputNumber;