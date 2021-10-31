import { defineComponent, ref, onMounted, nextTick  } from 'vue'
import buttonProps from './validator.js'

const button = defineComponent({
    name: 'Button',
    props: buttonProps,
    setup(props) {
        let waveState = ref(false)
        const activeName = 'u-button-wave-' + props.type
        const timeout = ref(null)
        const onClick = () => {
            console.log(213)
            // waveState.value = false
            // await nextTick()
            waveState.value = true
            if(timeout.value) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    waveState.value = false
                },300)
                return
            }
        }
        return {
            waveState,
            activeName,
            onClick,
            isDeep: props.deep ? 'u-button-deep' : '',
            isDashed: props.dashed ? 'u-button-dashed' : '',
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
                    {[activeName]:waveState}
                ]}
                onClick={onClick}
            >
                {$slots.default?.()}
            </div>
        )
    }
})

export default button