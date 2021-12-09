import { defineComponent, watch, reactive } from 'vue';
import gsap from 'gsap'
const transit = defineComponent({
    name: 'transit',
    props: {
        duration: {
            type: Number,
            default: 0.5
        }
    },
    setup(props, { slots }) {
        
        const o = reactive({
            value: Number(slots.default?.()?.[0]?.children)
        })
 
        watch(() => slots.default?.()?.[0]?.children,(newValue,oldValue) => {
            console.log(newValue,oldValue)
            gsap.to(o, {
                duration : props.duration,
                value: Number(newValue)
            })
        })
        return () =>  (
            <>
                {
                    o.value.toFixed()
                }
            </>
        )
    }
       
});

export default transit;