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
        },
        step: {
            type: Number,
            default: 1
        }
    },
    emits:['update:value', 'change', 'input','increase','decrease'],
    setup(props, { slots,emit }) {
        const inputNumberSize = computed(() => {
            return 'u-input-number-size-' + props.size
        })
        const onValueChange = (value) => {
            const numberValue = Number.parseInt(value) || 0
            emit('change', numberValue)
            emit('update:value', numberValue)
        }
        const decreaseValue = () => {
            const numberValue = Number.parseInt(props.value) - props.step
            emit('decrease', numberValue)
            emit('update:value', numberValue)
        }
        const increaseValue = () => {
            const numberValue = Number.parseInt(props.value) + props.step
            emit('increase', numberValue)
            emit('update:value', numberValue)
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