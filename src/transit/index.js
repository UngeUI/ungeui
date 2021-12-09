import Transit from './transit.jsx';

Transit.name = 'UTransit';

Transit.install = (app) => {
   app.component(Transit.name, Transit);
};

export default Transit;