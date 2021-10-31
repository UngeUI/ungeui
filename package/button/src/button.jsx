import { defineComponent } from 'vue'
import buttonProps from './validator.js'

const button = defineComponent({
    name: 'Button',
    props: buttonProps,
    setup(props) {
        return {
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
            $slots
        } = this
        return (
            <div class={['u-button',isText,buttonSize,buttonType,isDeep,isDashed]}>
                {$slots.default?.()}
            </div>
        )
    }
})

export default button