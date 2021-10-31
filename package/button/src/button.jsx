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
        }
    },
    render() {
        const {
            buttonType,
            isDeep,
            isDashed,
            $slots
        } = this
        return (
            <div class={['u-button',buttonType,isDeep,isDashed]}>
                {$slots.default?.()}
            </div>
        )
    }
})

export default button