import { defineComponent } from 'vue'

const icon = defineComponent({
    name: 'Icon',
    props: {
        type: String,
        size: Number
    },
    setup(props) {
        return {
            iconType: props.type,
            iconStyle: {
                'font-size': +props.size + 'px'
            }
        }
    },
    render() {
        const { iconType, iconStyle } = this
        return <span class={['iconfont', iconType]} style={iconStyle}></span>
    }
})

export default icon
