import { defineComponent, watch, computed, ref,onMounted } from 'vue';

const space = defineComponent({
    name: 'space',
    props: {
        justify: {
            type: String
        },
        align: {
            type: String,
            default: 'center'
        },
        vertical: {
            type: Boolean
        },
        grap: {
            type: Number,
            default: 12
        }
    },
    setup(props, { slots }) {
        const spaceStyle = computed(() => {
            return {
                'align-items': props.vertical ? '' : props.align,
                'justify-content' : props.justify,
                'flex-flow': props.vertical ? 'column nowrap': 'auto'
            }
        })
        const spaceGap = computed(() => {
            return props.grap + 'px'
        })
        const spaceRef = ref(null)
        onMounted(()=> {
            const len = spaceRef.value.children.length
            if(props.vertical) {
                for(let el of spaceRef.value.children) {      
                    el.style.marginTop = '0'
                    el.style.marginBottom = spaceGap.value
                }
            } else {
                for(let el of spaceRef.value.children) {      
                    el.style.marginLeft = '0'
                    el.style.marginRight = spaceGap.value
                }
            }
            
            if(len) {
                spaceRef.value.children[len - 1].style.marginRight = '0'
                spaceRef.value.children[len - 1].style.marginBottom = '0'
            }
        })
        watch(spaceGap,() => {
            const len = spaceRef.value.children.length
            if(props.vertical) {
                for(let el of spaceRef.value.children) {      
                    el.style.marginTop = '0'
                    el.style.marginBottom = spaceGap.value
                }
            } else {
                for(let el of spaceRef.value.children) {      
                    el.style.marginLeft = '0'
                    el.style.marginRight = spaceGap.value
                }
            }
            
            if(len) {
                spaceRef.value.children[len - 1].style.marginRight = '0'
                spaceRef.value.children[len - 1].style.marginBottom = '0'
            }
        })
        return () =>  (
            <div ref={spaceRef} class='u-space' style={spaceStyle.value}>
                {
                    slots.default?.()
                }
            </div>
        )
    }
       
});

export default space;