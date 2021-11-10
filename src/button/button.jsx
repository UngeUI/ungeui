import { defineComponent, ref, onMounted, nextTick,computed } from 'vue'
import UIcon from '../icon/icon.jsx'
import buttonProps from './validator.js'

const button = defineComponent({
    name: 'Button',
    props: buttonProps,
    setup(props) {
        let waveState = ref(false)

        const timeout = ref(null)
        const onClick = async () => {
            if (props.disabled) {
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
            onClick,
            activeName: computed(() => props.type && 'u-button-wave-' + props.type),
            isDeep:  computed(() => props.deep && 'u-button-deep'),
            isDashed:  computed(() => props.dashed && 'u-button-dashed'),
            isDisabled:  computed(() => props.disabled && 'u-button-disabled' ),
            isText:  computed(() => props.text && 'u-button-text'),
            isRound:  computed(() => props.round && 'u-button-round'),
            iconType:  computed(() => props.icon && `iconfont u-button-icon-${props.size}  ${props.icon}`),
            buttonType:  computed(() => 'u-button-' + props.type),
            buttonSize:  computed(() => 'u-button-size-' + props.size),
        }
    },
    render() {
        const {
            buttonType,
            buttonSize,
            isDeep,
            isDashed,
            isText,
            isRound,
            isDisabled,
            iconType,
            prefix,
            suffix,
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
                    iconType,
                    isRound,
                    { [activeName]: waveState }
                ]}
                onClick={onClick}
            >
                {/* {prefix && <UIcon type={prefix} style=""></UIcon>} */}
                {$slots.prefix?.()}
                {$slots.default && (
                    <span class={[{'u-button-prefix':$slots.prefix},{'u-button-suffix':$slots.suffix}]}>
                        {
                            $slots.default?.()
                        }
                    </span>
                )}
                {$slots.suffix?.()}
                {/* {$slots.suffix && <span class="u-button-suffix">{$slots.suffix?.()}</span>} */}
                {/* {suffix && <UIcon type={suffix} style=""></UIcon>} */}
            </div>
        )
    }
})

export default button
