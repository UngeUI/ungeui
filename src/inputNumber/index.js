import InputNumber from './inputNumber.jsx';

InputNumber.name = 'UInputNumber';

InputNumber.install = (app) => {
   app.component(InputNumber.name, InputNumber);
};

export default InputNumber;