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

        const children = slots.default?.()
        const horizontalClass = computed(() => {
            return {
                'margin-top': 0,
                'margin-bottom': 0,
                'margin-right': spaceGap.value
            }
        })
        const verticalClass = computed(() => {
            return {
                'margin-left': 0,
                'margin-right': 0,
                'margin-bottom': spaceGap.value
            }
        })
        const LastElementStyle = computed(() => {
            return props.vertical ? 
                { 'margin-bottom': 0 } : 
                { 'margin-right': 0 }
        })
            
        return () =>  (
            <div class='u-space' style={spaceStyle.value}>
                {
                    children.map((child,index) => (
                        <div
                            style={[
                                props.vertical ? 
                                verticalClass.value :
                                horizontalClass.value,
                                index == children.length - 1 && LastElementStyle.value
                            ]}
                        >
                            {child}
                        </div>
                    ))
                }
            </div>
        )
    }
       
});

export default space;