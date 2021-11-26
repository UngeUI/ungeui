import Space from './space.jsx';

Space.name = 'USpace';

Space.install = (app) => {
   app.component(Space.name, Space);
};

export default Space;