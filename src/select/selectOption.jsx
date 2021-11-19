import { defineComponent,computed, inject } from 'vue'

const selectOption = defineComponent({
    name: 'selectOption',
    props: {
        value: {
            type: [String, Number, Boolean, Object]
        }
    },
    setup(props,{slots}) {

        const selectOptionSize = computed(() => {
            return 'u-select-size-' + selectContext.size
        })

        const selectContext = inject('selectContext')
        if(selectContext.props.value == props.value) {
            selectContext.onSelectChange(props.value,slots.default?.()[0].children)    
        }

        const onClickOption = (e) => {
            selectContext.onSelectChange(props.value,slots.default?.()[0].children)
        }
        return () => (
            <div onClick={onClickOption} class={['u-select-option',selectOptionSize.value]}>
                {
                    slots.default?.()
                }
            </div>
        )
    }
})

export default selectOption