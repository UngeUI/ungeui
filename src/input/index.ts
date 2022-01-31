import Input from './input.tsx'
import { App } from 'vue'
Input.name = 'UInput'

Input.install = (app: App) => {
  app.component(Input.name, Input)
}

export default Input
