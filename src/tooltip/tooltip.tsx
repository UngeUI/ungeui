import { defineComponent, Teleport, Transition, ref, computed } from 'vue'
import { useTargetHover, usePosition } from './use'
import { useElementSize } from '@vueuse/core'
const tooltip = defineComponent({
  name: 'tooltip',
  props: {
    placement: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'left', 'bottom', 'right'].includes(value)
      },
    },
    color: {
      type: String,
      default: 'rgba(0,0,0,.8)',
    },
  },
  setup(props, { slots }) {
    const setfRef = ref(null)
    const {
      top: targetTop,
      left: targetLeft,
      width: targetWidth,
      height: targetHeight,
    } = usePosition(setfRef)

    const { isHovered: targetIsHoverd } = useTargetHover(setfRef)

    const tooltipRef = ref()
    const { width: tooltipWidth, height: tooltipHeight } = useElementSize(
      tooltipRef,
    )

    const arrayPosition = computed(() => {
      return 'u-tooltip-arrow-' + props.placement
    })
    const tooltipStyle = computed(() => {
      const computedLeft = ref()
      const computedTop = ref()
      switch (props.placement) {
        case 'top':
          computedLeft.value =
            targetLeft.value - tooltipWidth.value / 2 + targetWidth.value / 2
          computedTop.value = targetTop.value - tooltipHeight.value - 15
          break
        case 'right':
          computedLeft.value = targetLeft.value + targetWidth.value + 15
          computedTop.value =
            targetTop.value - tooltipHeight.value / 2 + targetHeight.value / 2
          break
        case 'bottom':
          computedLeft.value =
            targetLeft.value - tooltipWidth.value / 2 + targetWidth.value / 2
          computedTop.value = targetTop.value + targetHeight.value + 15
          break
        case 'left':
          computedLeft.value = targetLeft.value - tooltipWidth.value - 15
          computedTop.value =
            targetTop.value - tooltipHeight.value / 2 + targetHeight.value / 2
          break
      }
      return {
        top: computedTop.value - 4 + 'px',
        left: computedLeft.value - 4 + 'px',
        '--bgColor': props.color,
      }
    })
    const animateIn = computed(() => {
      if (props.placement == 'top') {
        return 'animate__animated animate__fadeInDown'
      } else if (props.placement == 'right') {
        return 'animate__animated animate__fadeInRight'
      } else if (props.placement == 'bottom') {
        return 'animate__animated animate__fadeInUp'
      } else if (props.placement == 'left') {
        return 'animate__animated animate__fadeInLeft'
      } else {
        return ''
      }
    })
    const getElementNode = (children) => {
      //wrapper Text Node in span
      return typeof children[0].children == 'string' ? (
        <span>{children}</span>
      ) : (
        children
      )
    }
    return () => (
      <div ref={setfRef}>
        {getElementNode(slots.default?.())}
        <Teleport to="body">
          <Transition
            enter-active-class={animateIn.value}
            leave-active-class="animate__animated animate__fadeOut"
          >
            {targetIsHoverd.value && (
              <div
                ref={tooltipRef}
                class={['u-tooltip', arrayPosition.value]}
                style={tooltipStyle.value}
              >
                {slots.title?.()}
              </div>
            )}
          </Transition>
        </Teleport>
      </div>
    )
  },
})

export default tooltip
