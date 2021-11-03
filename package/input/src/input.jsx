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
        }
    },
    setup(props) {
        const inputSize = 'u-input-size-' + props.size
        
        let isFocus = ref(false)
        const onFocus = () => {
            console.log(23)
            isFocus.value = true
        }
        const onBlur = () => {
            console.log(23)
            isFocus.value = false
        }
        return () => (
            <div class={['u-input',{'u-input-focus':isFocus.value},inputSize]}>
                <div class={['u-input-wrapper']}>
                    <div class={['u-input-prefix']}></div>
                    <div class={['u-input-input']}>
                        <input onFocus={onFocus} onBlur={onBlur} class="u-input__input-el"></input>
                    </div>
                    <div class={['u-input-suffix']}></div>
                </div>
            </div>
        )
    }
})

export default input