import { defineComponent, watch, reactive } from 'vue';
import gsap from 'gsap'
const transit = defineComponent({
    name: 'transit',
    props: {

    },
    setup(props, { slots }) {
        
        const o = reactive({
            value: 0
        })
 
            watch(() => slots.default?.()?.[0]?.children,(newValue,oldValue) => {
                console.log(newValue,oldValue)
                gsap.to(o, { 
                    duration : 0.5,
                    value: Number.parseInt(oldValue) 
                })
            })
        return () =>  (
            <>
                {
                    typeof o.value == 'number' && o.value.toFixed()
                }
            </>
        )
    }
       
});

export default transit;