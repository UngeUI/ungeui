import Icon from './icon.jsx';

Icon.name = 'UIcon';

Icon.install = (app) => {
    app.component(Icon.name, Icon);
};

export default Icon;
