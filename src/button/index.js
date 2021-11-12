import Button from './button.jsx';

Button.name = 'UButton';

Button.install = (app) => {
    app.component(Button.name, Button);
};

export default Button;