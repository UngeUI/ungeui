import { defineComponent, computed } from 'vue';

const dividerProps = {
    type: {
        type: String,
        default: 'solid',
        validator(value) {
            return ['solid', 'dashed', 'dotted'].includes(value);
        },
    },
    bold: {
        type: Boolean,
        default: false,
        validator(value) {
            return typeof value == 'boolean';
        },
    },
    height: {
        type: Number,
    },
    color: {
        type: String,
    },
};

const divider = defineComponent({
    name: 'divider',
    props: dividerProps,
    setup(props) {
        return {
            type: computed(() => 'u-divider-' + props.type),
            bound: computed(() => props.bold && 'u-divider-bold'),
            dividerStyle: computed(() => ({
                'border-top-color': props.color,
                'border-top-width': props.height + 'px',
            })),
        };
    },
    render() {
        const {
            type,
            bound,
            dividerStyle,

            $slots,
        } = this;
        return (
            <div class={['u-divider', type, bound]} style={dividerStyle}></div>
        );
    },
});

export default divider;
