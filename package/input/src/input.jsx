import { defineComponent,ref } from 'vue'

const input = defineComponent({
    name: 'Input',
    props:{
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['small','medium','large'].includes(value)
            }
        },
        value: String,
        placeholder: String
    },
    emits:['update:value'],
    setup(props,{emit,slots}) {
        const inputSize = 'u-input-size-' + props.size
        
        let isFocus = ref(false)
        const onFocus = () => {
            isFocus.value = true
        }
        const onBlur = () => {
            isFocus.value = false
        }

        const inputValue = ref(props.value)
        const onInput = (e) => {
            inputValue.value = e.target.value
            emit('update:value',e.target.value)
        }

        return () => (
            <div class={['u-input',{'u-input-focus':isFocus.value},inputSize]}>
                <div class={['u-input-wrapper']}>
                    <div class={['u-input-prefix']}>
                        {slots.prefix && slots.prefix?.()}
                    </div>
                    <div class={['u-input-input']}>
                        <input
                            placeholder={props.placeholder} 
                            class="u-input__input-el"
                            onFocus={onFocus} 
                            onBlur={onBlur}
                            onInput={onInput}
                            value={inputValue.value}
                        ></input>
                    </div>
                    <div class={['u-input-suffix']}>
                        {slots.suffix && slots.suffix?.()}
                    </div>
                </div>
            </div>
        )
    }
})

export default input