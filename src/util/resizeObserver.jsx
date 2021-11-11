import {
    defineComponent,
    reactive,
    getCurrentInstance,
    onUpdated,
    onMounted,
    onUnmounted,
} from 'vue';
import ResizeObserver from 'resize-observer-polyfill';

export default defineComponent({
    name: 'resizeObserver',
    props: {
        onResize: {
            type: Function,
        },
    },
    setup(props, { slots, emit }) {
        const state = reactive({
            width: 0,
            height: 0,
        });
        const onResize = (entries, observer) => {
            const { width, height } = entries[0].contentRect;

            const { onResize } = props;

            const fixedWidth = Math.floor(width);
            const fixedHeight = Math.floor(height);

            if (state.width !== fixedWidth || state.height !== fixedHeight) {
                const size = { width: fixedWidth, height: fixedHeight };

                Object.assign(state, size);

                if (onResize) {
                    onResize(state);
                }
            }
        };
        const instance = getCurrentInstance();
        let resizeObserver = null;
        const registerObserver = () => {
            let node = instance?.vnode?.el;

            if (!resizeObserver && node) {
                resizeObserver = new ResizeObserver(onResize);
                resizeObserver.observe(node);
            }
        };
        const destoryObserver = () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
        onMounted(() => {
            registerObserver();
        });
        onUnmounted(() => {
            destoryObserver();
        });
        return () => {
            return slots.default?.()[0];
        };
    },
});

//Todo 完成v-resizeObserver
