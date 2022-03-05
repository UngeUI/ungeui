import Slider from './slider.tsx';
import { App } from 'vue';

Slider.name = 'USlider';

Slider.install = (app: App) => {
   app.component(Slider.name, Slider);
};

export default Slider;