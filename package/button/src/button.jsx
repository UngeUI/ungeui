import { defineComponent } from 'vue'

const buttonProps = {
    size: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['small','medium','large','huge'].includes(value)
        }
    },
    type: {
        type: String,
        default: 'default',
        validator(value) {
            return ['default','success','danger','warning','info'].includes(value)
        }
    },
    deep: {
        type: Boolean,
        default: false,
        validator(value) {
            return typeof value == 'boolean'
        }
    },
    dashed: {
        type: Boolean,
        default: false,
        validator(value) {
            return typeof value == 'boolean'
        }
    },
    size: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['small','medium','large','huge'].includes(value)
        }
    }
}

const button = defineComponent({
    name: 'Button',
    props:buttonProps,
    setup(props) {
        return {
            isDeep: props.deep ? 'u-button-deep' : '',
            isDashed: props.dashed ? 'u-button-dashed' : '',
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
            $slots
        } = this
        return (
            <div class={['u-button',buttonSize,buttonType,isDeep,isDashed]}>
                {$slots.default?.()}
            </div>
        )
    }
})

export default button