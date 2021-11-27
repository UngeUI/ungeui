---
map:
    path: /components/dialog
---

# Dialog

Display data on the same page in the form of pop-up window

```js
import { UDialog } from 'ungeui'
```

## Code demonstration

### Ordinary dialog

<demo src="./demo/base.vue"
  language="vue"
  title="basic usage"
  desc="dialog basic usage">
</demo>

### Preset event interaction

<demo src="./demo/event.vue"
  language="vue"
  title="basic usage"
  desc="trigger some hooks">
</demo>

### Customize bottom content

<demo src="./demo/slot.vue"
  language="vue"
  title="basic usage"
  desc="after occupying the bottom slot, the preset cancellation and confirmation events will be invalid">
</demo>

### Custom icon type

<demo src="./demo/icon.vue"
  language="vue"
  title="basic usage"
  desc="custom closed icon">
</demo>

### 过渡动画类别

In addition, we hope to give users more flexibility in transition animation, thanks to[animate.css](https://www.dowebok.com/demo/2014/98/), you can pass in the legal animation class

<demo src="./demo/animate.vue"
  language="vue"
  title="basic usage"
  desc="all persistent class names can be passed in as configuration">
</demo>





## Props

|  Parameter | description   | type    |  default value|
| :----: | :----------: | :-------: | :---------: | 
| `visible` | control the display of dialog | `boolean` | `false` |
| `on-Confirm` | click the dialog to confirm | `(e:MouseEvent) => void` | `false` |
| `on-Cancel` |  click the dialog to cancel | `(e:MouseEvent) => void` | `undefined` |
| `on-Close` | click the dialog to close | `(e:MouseEvent) => void` | `undefined` |
| `enter-name` |  animation when dialog enter | `来自animate.css` | `bounceIn` |
| `leave-name` |  animation when dialog leaves | `来自animate.css` | `bounceOut` |
| `width` | maximum width. When it is number, the unit is PX  | `string | number` | `512px` |
| `bodyMaxHeight` | the maximum height of the body. When it is number, the unit is PX | `string | number` | `512px` |

## slots

|  参数  |     说明     |   类型    |   默认值    |
| :----: | :----------: | :-------: | :---------: | 
| `default` | default slot | `any` | `undefined` |
| `footer` | footer slot | `any` | `undefined` |
| `icon` | icon slot | `any` | `undefined` |