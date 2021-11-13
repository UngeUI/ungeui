import { defineComponent, ref, computed } from 'vue'

const message = defineComponent({
    name:'message',
    props:{
        text: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: 'info'
        }
    },
    setup(props, {slots}) {
        console.log(props.text,props.type)
        const messageType = computed(() => {
            return 'u-message-' + props.type
        })
        return () => (
            // <teleport to="body">
                <div class={['u-message',messageType.value]}>
                    hello message {
                        props.text
                    }
                </div>
            // </teleport>
        )
    }
})

export default message