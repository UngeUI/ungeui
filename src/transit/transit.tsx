import { defineComponent, watch, reactive } from 'vue';
import sit from '@ungeui/transit'
const transit = defineComponent({
    name: 'transit',
    props: {
        duration: {
            type: Number,
            default: 500
        }
    },
    setup(props, { slots }) {
        
        const o = reactive({
            value: Number(slots.default?.()?.[0]?.children)
        })
 
        watch(() => slots.default?.()?.[0]?.children,(newValue,oldValue) => {
            console.log(newValue,oldValue)
            sit(o, {
                duration : props.duration,
                key: 'value',
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