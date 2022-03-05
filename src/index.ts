import { App } from 'vue'
import '../styles/index.styl'

import UTag from './Tag/index'
import UAvatar from './avatar/index'
import UButton from './button/index'
import UDivider from './divider/index'
import UIcon from './icon/index'
import UInput from './input/index'
import { URadio, URadioGroup, URadioButton } from './radio/index'
import { UCheckbox, UCheckboxGroup } from './checkbox/index'
import USwitch from './switch/index'
import UDialog from './dialog/index'
import message from './message/main'
import { USelect, USelectOption } from './select/index'
import UTable from './table/index'
import UPagination from './pagination/index'
import USlider from './slider/index'
import UInputNumber from './inputNumber/index'
import USpace from './space/index'
import UTooltip from './tooltip/index'
import UBadge from './badge/index'
import loadingBar from './loadingBar/index'
import USpin from './spin/index'
import UTransit from './transit/index'
import UTree from './tree/index'
//ImportFlag

const components = [
  UTag,
  UButton,
  UAvatar,
  UDivider,
  UIcon,
  UInput,
  URadio,
  URadioGroup,
  URadioButton,
  UCheckbox,
  UCheckboxGroup,
  USwitch,
  UDialog,
  USelect,
  USelectOption,
  UTable,
  UPagination,
  USlider,
  UInputNumber,
  USpace,
  UTooltip,
  UBadge,
  USpin,
  UTransit,
  UTree,
  //ArrayFlag
]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default install

export {
  UButton,
  UTag,
  UAvatar,
  UDivider,
  UIcon,
  UInput,
  URadio,
  URadioGroup,
  URadioButton,
  UCheckbox,
  UCheckboxGroup,
  USwitch,
  UDialog,
  USelect,
  USelectOption,
  UTable,
  UPagination,
  message,
  USlider,
  UInputNumber,
  USpace,
  UTooltip,
  UBadge,
  loadingBar,
  USpin,
  UTransit,
  UTree,
  //ExportFlag
}

export * from './avatar/index'
