import { computed, defineComponent, ref } from 'vue'
import ResizeObserver from '../../util/resizeObserver.jsx'

const avatarProps = {
    size: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['small', 'medium', 'large', 'huge'].includes(value)
        }
    },
    src: {
        type: String
    },
    round: {
        type: Boolean,
        default: false,
        validator(value) {
            return typeof value == 'boolean'
        }
    }
}

const avatar = defineComponent({
    name: 'Avatar',
    props: avatarProps,
    setup(props, { slots }) {
        const textRef = ref(null) //mount text node
        const selfRef = ref(null) //mount father node

        const setScaleParam = ({ width, height }) => {
            const { value: textElement } = textRef

            const { offsetWidth: textWidth, offsetHeight: textHeight } =
                textRef.value
            const { offsetWidth: elWidth, offsetHeight: elHeight } =
                selfRef.value
            //width/height same as textWidth/textHeight

            const radix = 0.9
            const ratio = Math.min(
                (elWidth / textWidth) * radix,
                (elHeight / textHeight) * radix,
                1
            )
            //because of left:50%,top:50%
            textElement.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`
        }

        const size = 'u-avatar-size__' + props.size
        const round = props.round ? 'u-avatar-round' : ''
        return {
            textRef,
            selfRef,
            setScaleParam,
            avatarClass: ['u-avatar', size, round]
        }
    },
    render() {
        const {
            textRef,
            selfRef,
            setScaleParam,
            avatarClass,

            src,
            size,
            $slots
        } = this
        // console.log($slots.default()[0],'slots')
        return (
            <div ref="selfRef" class={avatarClass}>
                {!$slots.default && src ? (
                    <img class={'u-avatar-size__' + size} src={src}></img>
                ) : (
                    <ResizeObserver onResize={setScaleParam}>
                        <span ref="textRef" class="u-avatar-text">
                            {$slots.default?.()}
                        </span>
                    </ResizeObserver>
                )}
            </div>
        )
    }
})

export default avatar
