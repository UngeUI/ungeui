import { defineComponent, ref, watch, reactive,onMounted, computed } from 'vue';
import { useMouseInElement,useMousePressed } from '@vueuse/core'
const slider = defineComponent({
    name: 'slider',
    props: {
        value: {
            type: [Number,Array],
            
        },
        range: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 100
        },
        min: {
            type: Number,
            default: 0
        }
    },
    emits:['update:value'],
    setup(props, { slots,emit }) {
        const sliderRef = ref(null)
        const { 
            elementWidth: sliderWidth,
            elementX: sliderX
        } = useMouseInElement(sliderRef)

        const pointOneRef = ref(null)
        const {
            pressed: one
        } = useMousePressed({target: pointOneRef})

        const pointTwoRef = ref(null)
        const {
            pressed: two
        } = useMousePressed({target: pointTwoRef})

        const pointOneStyle = reactive({
            left: 0,
        })
        
        const pointTwoStyle = reactive({
            left: 0,
            display: props.range ? 'block' : 'none'
        })
        const trackStyle = reactive({
            left: 0,
            'max-width': 0,
        })

        const leftRecord = reactive({
            one: 0,
            two: 0
        })
        onMounted(() => {
            const { width } = sliderRef.value.getBoundingClientRect()
            const rateTransform = (value) => {
                return 0.01 * value * width
            }
            if(props.range) {
                leftRecord.one = rateTransform(props.value[0])
                leftRecord.two = rateTransform(props.value[1])
                pointOneStyle.left = rateTransform(props.value[0]) + 'px'    
                pointTwoStyle.left = rateTransform(props.value[1]) + 'px'    
            } else {
                leftRecord.one = rateTransform(props.value)
                pointOneStyle.left = rateTransform(props.value) + 'px'    
            }
        })
        
        const ceilTransform = (value) => {
            return Math.ceil(value / sliderWidth.value * 100)
        }
        const floorTransform = (value) => {
            return Math.floor(value / sliderWidth.value * 100)
        }
        watch([one,two,sliderX],([oneIsPress,twoIsPress]) => {
            
            if(oneIsPress && sliderX.value >=0 && sliderX.value <= sliderWidth.value) {
                if(props.range) {
                    const value = leftRecord.one > leftRecord.two ?
                                    [floorTransform(leftRecord.two),ceilTransform(leftRecord.one)]:
                                    [floorTransform(leftRecord.one),ceilTransform(leftRecord.two)]
                    emit('update:value', value)
                } else {
                    emit('update:value',floorTransform(sliderX.value))
                }
                
                leftRecord.one = sliderX.value
                pointOneStyle.left = sliderX.value - 7 + 'px'
            }
            if(twoIsPress && sliderX.value >=0 && sliderX.value <= sliderWidth.value) {
                leftRecord.two = sliderX.value
                pointTwoStyle.left = sliderX.value - 7 + 'px'
                if(props.range) {
                    const value = leftRecord.one > leftRecord.two ?
                                    [Math.ceil(leftRecord.two / sliderWidth.value * 100),Math.ceil(leftRecord.one / sliderWidth.value * 100) ]:
                                    [Math.ceil(leftRecord.one/ sliderWidth.value * 100),Math.ceil(leftRecord.two / sliderWidth.value * 100)]
                    emit('update:value', value)
                } else {
                    emit('update:value',(Math.ceil(sliderX.value / sliderWidth.value * 100)))
                }
            }
            if(leftRecord.one > leftRecord.two) {
                
                trackStyle.left = leftRecord.two + 'px'
                trackStyle['max-width'] = leftRecord.one - leftRecord.two + 'px'
            } else {
                trackStyle.left = leftRecord.one + 'px'
                trackStyle['max-width'] = leftRecord.two - leftRecord.one + 'px'
            }
        })
        
        return () =>  (
            <div class="u-slider" ref={sliderRef}>
                <div class="u-slider-bg"></div>
                <div 
                    class="u-slider-track"
                    style={trackStyle}
                ></div>
                <div
                    ref={pointOneRef}
                    style={pointOneStyle}
                    class="u-slider-point u-slider-point-1"
                ></div>
                <div
                    ref={pointTwoRef}
                    style={pointTwoStyle}
                    class="u-slider-point u-slider-point-2"
                ></div>
            </div>
        )
    }
       
});

export default slider;