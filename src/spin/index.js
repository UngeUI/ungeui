import Spin from './spin.vue';

Spin.name = 'USpin';

Spin.install = (app) => {
    app.component(Spin.name, Spin);
};

export default Spin;