import InputNumber from './inputNumber.tsx'
import { App } from 'vue'

InputNumber.name = 'UInputNumber'

InputNumber.install = (app: App) => {
  app.component(InputNumber.name, InputNumber)
}

export default InputNumber
