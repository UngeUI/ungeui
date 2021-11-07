import Radio from './radio.jsx'
import { App } from 'vue'

Radio.name = 'URadio'

Radio.install = (app: App): void => {
    app.component(Radio.name, Radio)
}

export default Radio