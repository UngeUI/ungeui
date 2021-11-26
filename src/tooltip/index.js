import Tooltip from './tooltip.vue';

Tooltip.name = 'UTooltip';

Tooltip.install = (app) => {
    app.component(Tooltip.name, Tooltip);
};

export default Tooltip;