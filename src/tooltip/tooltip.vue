<template>
    <slot></slot>
    <Teleport to="body">
        <transition
        :enter-active-class="animateIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div v-show="targetIsHoverd" ref="tooltipRef" :class="['u-tooltip',arrayPosition]" :style="tooltipStyle">
            <slot name="title"></slot>
        </div>
        </transition>
    </Teleport>
</template>

<script>
import { defineComponent,onMounted,watch,ref,computed } from 'vue';
import usePosition from './use/usePosition.js'
import useTargetHover from './use/useTargetHover.js'
import { useElementSize } from '@vueuse/core'
const tooltip = defineComponent({
    name: 'tooltip',
    props: {
        placement:{
            type: String,
            default: 'top',
            validator(value) {
                return ['top','left','bottom','right'].includes(value)
            }
        }
    },
    setup(props, { slots }) {
        
        const { 
            top: targetTop,
            left: targetLeft,
            width: targetWidth,
            height: targetHeight
        } = usePosition()

        const {
            isHovered: targetIsHoverd
        } = useTargetHover()

        let tooltipRef = ref()
        const { 
            width: tooltipWidth,
            height: tooltipHeight
        } = useElementSize(tooltipRef)
        
        const arrayPosition = computed(() => {
            return 'u-tooltip-arrow-' + props.placement
        })
        const tooltipStyle = computed(() => {
            const computedLeft = ref()
            const computedTop = ref()
            switch(props.placement) {
                case 'top': 
                    computedLeft.value = targetLeft.value - tooltipWidth.value / 2 + targetWidth.value / 2 
                    computedTop.value = targetTop.value - tooltipHeight.value - 15 
                    break;
                case 'right': 
                    computedLeft.value = targetLeft.value + targetWidth.value + 15 
                    computedTop.value = targetTop.value - tooltipHeight.value / 2 + targetHeight.value / 2 
                    break;
                case 'bottom': 
                    computedLeft.value = targetLeft.value - tooltipWidth.value / 2 + targetWidth.value / 2 
                    computedTop.value = targetTop.value + targetHeight.value + 15
                    break;
                case 'left': 
                    computedLeft.value = targetLeft.value - tooltipWidth.value  - 15
                    computedTop.value = targetTop.value - tooltipHeight.value / 2 + targetHeight.value / 2
                    break;
            }
            return {
                top: computedTop.value - 4 + 'px',
                left: computedLeft.value - 4 + 'px'
            }
        })
        const animateIn = computed(() => {
            if(props.placement == 'top') {
                return 'animate__animated animate__fadeInDown'
            } else if(props.placement == 'right') {
                return 'animate__animated animate__fadeInRight'
            } else if(props.placement == 'bottom') {      
                return 'animate__animated animate__fadeInUp'
            }else if(props.placement == 'left') {       
                return 'animate__animated animate__fadeInLeft'
            }
        })
        
        return {
            tooltipRef,
            tooltipStyle,
            arrayPosition,
            targetIsHoverd,
            animateIn
        }
    }
       
});

export default tooltip;
</script>
