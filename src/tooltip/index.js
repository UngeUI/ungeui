import Tooltip from './tooltip.jsx';

Tooltip.name = 'UTooltip';

Tooltip.install = (app) => {
    app.component(Tooltip.name, Tooltip);
};

export default Tooltip;