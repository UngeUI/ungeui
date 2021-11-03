import { defineComponent, ref } from 'vue'

const input = defineComponent({
    name: 'Input',
    props: {
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['small', 'medium', 'large'].includes(value)
            }
        },
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return ['text', 'password', 'textarea'].includes(value)
            }
        },
        value: String,
        placeholder: String
    },
    emits: ['update:value'],
    setup(props, { emit, slots }) {
        const inputSize = 'u-input-size-' + props.size

        let isFocus = ref(false)
        const onFocus = () => {
            isFocus.value = true
        }
        const onBlur = () => {
            isFocus.value = false
        }

        const inputType = props.type == 'password' ? 'password' : ''

        const inputValue = ref(props.value)
        const onInput = (e) => {
            inputValue.value = e.target.value
            emit('update:value', e.target.value)
        }

        return () => (
            <div class={['u-input', { 'u-input-focus': isFocus.value }]}>
                {props.type != 'textarea' ? (
                    <div class={['u-input-wrapper', inputSize]}>
                        {slots.prefix && (
                            <div class={['u-input-prefix']}>
                                {slots.prefix?.()}
                            </div>
                        )}

                        <div class={['u-input-input']}>
                            <input
                                placeholder={props.placeholder}
                                class="u-input__input-el"
                                type={inputType}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onInput={onInput}
                                value={inputValue.value}
                            ></input>
                        </div>

                        {slots.prefix && (
                            <div class={['u-input-suffix']}>
                                {slots.suffix && slots.suffix?.()}
                            </div>
                        )}
                    </div>
                ) : null}
                {props.type == 'textarea' ? (
                    <div class={['u-input-textarea']}>
                        <textarea
                            placeholder={props.placeholder}
                            class="u-input__textarea-el"
                            onFocus={onFocus}
                            onBlur={onBlur}
                            rows={4}
                            onInput={onInput}
                            value={inputValue.value}
                        ></textarea>
                    </div>
                ) : null}
            </div>
        )
    }
})

export default input
