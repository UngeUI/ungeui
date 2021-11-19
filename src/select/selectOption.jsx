import { defineComponent,computed, inject } from 'vue'

const selectOption = defineComponent({
    name: 'selectOption',
    props: {
        value: {
            type: [String, Number, Boolean, Object]
        },
        label: {
            type: [String, Number, Boolean, Object]
        },
        display:{
            type: Boolean,
            default: false
        }
    },
    setup(props,{slots}) {

        const selectOptionSize = computed(() => {
            return 'u-select-size-' + selectContext.size
        })

        const selectContext = inject('selectContext')
        if(selectContext.props.value == props.value) {
            selectContext.onSelectChange(props.value,props.label)    
        }

        const onClickOption = (e) => {
            selectContext.onSelectChange(props.value,props.label)
        }
        return () => (
            <div onClick={onClickOption} class={['u-select-option',selectOptionSize.value]}>
                <div>
                    {
                        props.label
                    }
                </div>
                <div>
                    {
                        props.display && props.value
                    }
                </div>
            </div>
        )
    }
})

export default selectOption