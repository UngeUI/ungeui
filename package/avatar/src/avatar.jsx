import {computed,defineComponent,ref} from 'vue'
import ResizeObserver from '../../util/resizeObserver.jsx'
import classNames from 'classnames'
const avatar = defineComponent({
    name: 'Avatar',
    props:{
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['small','medium','large'].includes(value)
            }
        }
    },
    setup(props,{slots}) {
        const size =  'u-avatar-size__' + props.size
    
        const textRef = ref(null)  //mount text node
        const selfRef = ref(null)  //mount father node

        const setScaleParam = ({width,height}) => {
            const { value : textElement } = textRef

            const { offsetWidth: textWidth, offsetHeight: textHeight } = textRef.value
            const { offsetWidth: elWidth, offsetHeight: elHeight } = selfRef.value
            //width/height same as textWidth/textHeight

            const radix = 0.9
            const ratio = Math.min(
              (elWidth / textWidth) * radix,
              (elHeight / textHeight) * radix,
              1
            )
            textElement.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`
        }

        return {
            textRef,
            selfRef,
            text: slots.default?.(),
            setScaleParam,
            avatarClass: classNames(['u-avatar',size])
        }
    },
    render() {
        const {
            avatarClass,
            setScaleParam,
            textRef,
            selfRef,
            text
        } =  this
        return (
            <div 
                ref="selfRef"
                class={avatarClass} 
            >
                <ResizeObserver onResize={setScaleParam}> 
                    <span 
                        ref="textRef"
                        class="u-avatar-text"
                    >{text}</span>
                </ResizeObserver>
            </div>
        )
    }
})

export default avatar

