import { defineComponent, computed, ref, Transition } from 'vue'
import useWidth from './use/useWidth'
const loadingBar = defineComponent({
  name: 'loadingBar',
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, expose }) {
    const { width, isShow, endWidth } = useWidth()

    const innerStyle = computed(() => {
      return {
        width: width.value,
        'background-color': props.color,
      }
    })
    expose({
      endWidth,
    })
    return () => (
      <Transition
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp"
      >
        {isShow.value && (
          <div class="u-loading-bar">
            <div class="u-loading-bar-inner" style={innerStyle.value}></div>
          </div>
        )}
      </Transition>
    )
  },
})

export default loadingBar
