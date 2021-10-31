import {defineComponent} from 'vue'

const dividerProps = {
    type: {
        type: String,
        default: 'solid',
        validator(value) {
            return ['solid','dashed','dotted'].includes(value)
        }
    },
    bold: {
        type: Boolean,
        default: false,
        validator(value) {
            return typeof value == 'boolean'
        }
    }
}

const divider = defineComponent({
    name: 'divider',
    props: dividerProps,
    setup(props) {
        console.log(props.type,'props')
        return {
            type: 'u-divider-'+ props.type,
            bound: props.bold ? 'u-divider-bold' : ''
        }
    },
    render() {
        const {
            type,
            bound,

            $slots
        } = this
        return (
            <div 
                class={['u-divider',type,bound]}
            >
                
            </div>
        )
    }
})

export default divider

