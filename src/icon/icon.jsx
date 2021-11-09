import { defineComponent, computed } from 'vue'

const icon = defineComponent({
    name: 'Icon',
    props: {
        color: String,
        size: {
            type: [Number,String],
            default: 30
        }
    },
    setup(props,{slots}) {
        let style = computed(() => {
            return {
                "color": props.color,
                "font-size": typeof props.size == 'string' ?
                        props.size :
                        props.size + 'px'
            }
        })
        return () => (
            <i style={style.value}>
                {
                    slots.default?.()
                }
            </i>
        )
    },
})

export default icon
