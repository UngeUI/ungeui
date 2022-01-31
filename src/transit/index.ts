import Transit from './transit.tsx';
import { App } from 'vue';

Transit.name = 'UTransit';

Transit.install = (app: App) => {
   app.component(Transit.name, Transit);
};

export default Transit;