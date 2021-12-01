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
        max: {
            type: Number
        },
        min: {
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
        const filterValue = (value) => {
            if(props.min != undefined && value < props.min) {
                value = props.min
            }
            if(props.max && value > props.max) {
                value = props.max
            }
            return value
        }
        const onValueChange = (value) => {
            let numberValue = Number.parseInt(value) || 0
            numberValue = filterValue(numberValue)
            emit('change', numberValue)
            emit('update:value', numberValue)
        }
        const decreaseValue = () => {
            let numberValue = Number.parseInt(props.value) - props.step
            numberValue = filterValue(numberValue)
            emit('decrease', numberValue)
            emit('update:value', numberValue)
        }
        const increaseValue = () => {
            let numberValue = Number.parseInt(props.value) + props.step
            numberValue = filterValue(numberValue)
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