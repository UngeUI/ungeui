import { defineComponent, inject, computed } from 'vue'
import MdiCheckBold from './util/MdiCheckBold.vue'
const checkbox = defineComponent({
    name: 'Checkbox',
    props: {
        value: [String, Number, Boolean],
        checked: {
            type: Boolean,
            defalut: false,
            validator(value) {
                return typeof value == 'boolean';
            },
        },
        disabled: {
            type: Boolean,
            defalut: false
        },
    },
    emits:['update:checked'],
    setup(props,{slots,emit}) {
        const checkboxGroupContent = inject('checkboxGroupContent',undefined)

        const checkState = computed(() => {
            return props.checked || checkboxGroupContent?.props?.value.includes(props.value)
        })
        const onClick = () => {
            emit('update:checked', !props.checked)
            checkboxGroupContent?.onCheckboxChange(props.value)
        }
        console.log(checkboxGroupContent?.props?.value.includes(),123)
        return () => (
            <div
                class={['u-checkbox', { 'u-checkbox-disabled': props.disabled }]}
                onClick={onClick}
                // onClick={() => {
                //     if (props.disabled) {
                //         return;
                //     }
                //     // radioGroupContext.onRadioChange(props?.value);
                // }}
            >
                <input type="checkbox" class={['u-checkbox-input']} value={props.value}></input>
                <div
                    class={[
                        'u-checkbox-dot',
                        { 'u-checkbox-dot-checked': checkState.value },
                    ]}
                >
                    <MdiCheckBold />
                </div>
                <div class={['u-checkbox-label']}>{slots.default?.()}</div>
            </div>
        );
    }
})

export default checkbox