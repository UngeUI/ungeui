import { defineComponent, ref } from 'vue'

const message = defineComponent({
    name:'message',
    props:{

    },
    setup(props, {slots}) {
        
        return () => (
            // <teleport to="body">
                <div class={['u-message']}>
                    hello message {
                        slots.default?.()
                    }
                </div>
            // </teleport>
        )
    }
})

export default message