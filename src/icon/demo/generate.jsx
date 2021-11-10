import { h, computed, defineComponent, onMounted } from 'vue'
import Clipboard from 'clipboard'

const generate = defineComponent({
    name: 'generate',
    props:['type','copyText'],
    setup(props) {

        onMounted(() => {
            new Clipboard('.' + props.type.name);
        })
    },
    render() {
        const { type, copyText } = this
        
        return h('i',{
            class: type.name,
            'data-clipboard-text' : copyText
        },h(type))
    }
})

export default generate