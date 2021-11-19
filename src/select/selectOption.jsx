import { defineComponent,computed, inject } from 'vue'

const selectOption = defineComponent({
    name: 'selectOption',
    props: {
        
    },
    setup(props,{slots}) {

        const selectContext = inject('selectContext')
        
        const selectOptionSize = computed(() => {
            return 'u-select-size-' + selectContext.size
        })

        return () => (
            <div class={['u-select-option',selectOptionSize.value]}>
                {
                    slots.default?.()
                }
            </div>
        )
    }
})

export default selectOption