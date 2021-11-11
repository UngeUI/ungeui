import { defineComponent, inject, computed } from 'vue';

const radio = defineComponent({
    name: 'Radio',
    props: {
        value: [String, Number, Boolean],
        checked: {
            type: Boolean,
            defalut: false,
            validator(value) {
                return typeof value == 'boolean';
            },
        },
        disabled: Boolean,
    },
    emits: [],
    setup(props, { slots }) {
        const radioGroupContext = inject('radioGroupContext', undefined);
        let checkState = computed(() => {
            return (
                props.checked || props.value == radioGroupContext?.props?.value
            );
        });
        return () => (
            <div
                class={['u-radio', { 'u-radio-disabled': props.disabled }]}
                onClick={() => {
                    if (props.disabled) {
                        return;
                    }
                    radioGroupContext.onRadioChange(props?.value);
                }}
            >
                <input class={['u-radio-input']} value={props.value}></input>
                <div
                    class={[
                        'u-radio-dot',
                        { 'u-radio-dot-checked': checkState.value },
                    ]}
                ></div>
                <div class={['u-radio-label']}>{slots.default?.()}</div>
            </div>
        );
    },
});

export default radio;
