import { defineComponent } from 'vue'

const radio = defineComponent({
    name: 'Radio',
    props: {
        value: [String, Number, Boolean],
        checked: {
            type: Boolean,
            defalut: false,
            validator(value) {
                return typeof value == 'boolean'
            }
        },
        disabled: Boolean
    },
    emits:[],
    setup(props,{slots}) {

        return () => (
            <div class={['u-radio',{'u-radio-disabled':props.disabled}]}>
                <input class={['u-radio-input']}></input>
                <div class={['u-radio-dot',{'u-radio-dot-checked': props.checked}]}></div>
                <div class={['u-radio-label']}>
                    {
                        slots.default?.()
                    }
                </div>
            </div>
        )
    }
})

export default radio