import { defineComponent, ref, onMounted, nextTick } from 'vue'
import buttonProps from './validator.js'
const button = defineComponent({
  name: 'Button',
  props: buttonProps,
  setup(props) {
    let waveState = ref(false)
    const activeName = 'u-button-wave-' + props.type
    const timeout = ref(null)
    const onClick = async () => {
      if(props.disabled) {
        return 
      }
      //todo, more effective way
      props.onClick?.()
      waveState.value = true
      setTimeout(() => {
        waveState.value = false
      }, 300)
    }
    return {
      waveState,
      activeName,
      onClick,
      isDeep: props.deep ? 'u-button-deep' : '',
      isDashed: props.dashed ? 'u-button-dashed' : '',
      isDisabled: props.disabled ? 'u-button-disabled' : '',
      isText: props.text ? 'u-button-text' : '',
      buttonType: 'u-button-' + props.type,
      buttonSize: 'u-button-size-' + props.size
    }
  },
  render() {
    const {
      buttonType,
      buttonSize,
      isDeep,
      isDashed,
      isText,
      isDisabled,
      waveState,
      activeName,
      onClick,
      $slots
    } = this
    return (
      <div
        class={[
          'u-button',
          isText,
          buttonSize,
          buttonType,
          isDeep,
          isDashed,
          isDisabled,
          { [activeName]: waveState }
        ]}
        onClick={onClick}
      >
        {$slots.default?.()}
      </div>
    )
  }
})

export default button
