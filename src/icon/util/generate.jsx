import { h, computed, defineComponent, onMounted, onUnmounted } from 'vue';
import Clipboard from 'clipboard';
import { message } from 'ungeui'
const generate = defineComponent({
    name: 'generate',
    props: ['type', 'copyText'],
    setup(props) {
        let clipboard = null
        onMounted(() => {
            clipboard = new Clipboard('.' + props.type.name);
            clipboard.on('success',() => {
                message.success(`"${props.copyText}"已复制 `)
            })
        });
        onUnmounted(() => {
            clipboard.destroy();
        })
    },
    render() {
        const { type, copyText } = this;

        return h(
            'i',
            {
                class: type.name,
                'data-clipboard-text': copyText,
            },
            h(type),
        );
    },
});

export default generate;
