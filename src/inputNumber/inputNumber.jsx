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
    emits:['update:value'],
    setup(props, { slots,emit }) {
        const inputNumberSize = computed(() => {
            return 'u-input-number-size-' + props.size
        })
        const onValueChange = (value) => {
            emit('update:value',value)
        }
        const decreaseValue = () => {
            emit('update:value', props.value - 1)
        }
        const increaseValue = () => {
            console.log(23,props.value)
            emit('update:value', props.value + 1)
        }
        return () =>  (
            <div class={["u-input-number",inputNumberSize.value]}>
                <span class="u-input-number-box u-input-number-decrease">
                    <Minus onClick={decreaseValue}/>
                </span>
                <UInput 
                    size={props.size}
                    value={props.value}
                    onUpdate:value={onValueChange}
                />
                <span class="u-input-number-box u-input-number-increase">
                    <Plus onClick={increaseValue}/>
                </span>
            </div>
        )
    }
       
});

export default inputNumber;