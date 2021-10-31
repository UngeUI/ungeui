import {defineComponent} from 'vue'

const dividerProps = {
    type: {
        type: String,
        default: 'solid',
        validator(value) {
            return ['solid','dashed','dotted'].includes(value)
        }
    }
}

const divider = defineComponent({
    name: 'divider',
    props: dividerProps,
    setup(props) {
        console.log(props.type,'props')
        return {
            type: 'u-divider-'+ props.type
        }
    },
    render() {
        const {
            $slots,
            type
        } = this
        return (
            <div 
                class={['u-divider',type]}
            >
                
            </div>
        )
    }
})

export default divider

