import { defineComponent } from 'vue'

const radioButton = defineComponent({
    name: 'RadioButton',
    props: {
        
    },
    setup(props,{slots}) {
        return () => (
            <div class={['u-radio-button']}>
                {
                    slots.default?.()
                }
            </div>
        )
    }
})

export default radioButton