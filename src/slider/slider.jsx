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
            left: '',
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
            leftRecord.one = 0.01 * props.value * width
            pointOneStyle.left = 0.01 * props.value * width + 'px'
        })
        watch([one,two,sliderX],([oneIsPress,twoIsPress]) => {
            
            if(oneIsPress && sliderX.value >=0 && sliderX.value <= sliderWidth.value) {
                emit('update:value',(Math.ceil(sliderX.value / sliderWidth.value * 100)))
                console.log(Math.ceil(sliderX.value / sliderWidth.value * 100))
                leftRecord.one = sliderX.value
                pointOneStyle.left = sliderX.value - 7 + 'px'
            }
            if(twoIsPress && sliderX.value >=0 && sliderX.value <= sliderWidth.value) {
                leftRecord.two = sliderX.value
                pointTwoStyle.left = sliderX.value - 7 + 'px'
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