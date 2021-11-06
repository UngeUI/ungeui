import { defineComponent, computed } from 'vue'

const icon = defineComponent({
    name: 'Icon',
    props: {
        type: String,
        size: Number
    },
    setup(props) {
        return {
            iconType: computed(() => props.type),
            iconSize: computed(() => props.size + 'px')
        }
    },
    render() {
        const { iconType, iconSize } = this
        return <span 
            class={['iconfont', iconType]} 
            style={{'font-size': iconSize}}
        ></span>
    }
})

export default icon
