import Slider from './slider.jsx';

Slider.name = 'USlider';

Slider.install = (app) => {
   app.component(Slider.name, Slider);
};

export default Slider;