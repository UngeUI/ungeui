---
map:
    path: /components/button
---

# Button🔘

Button have a stronger sense of interaction

## Code demonstration

```js
import { UButton } from 'ungeui';
```

### Click trigger🖱️

<demo src="./demo/en/default.vue"
  language="vue"
  title="🖱️basic usage"
  desc="Number of buttons clicked + 1">
</demo>

### Different themes🚀

<demo src="./demo/en/theme.vue"
  language="vue"
  title="🚀basic usage"
  desc="Different types determine different topic types. Five topics are provided by default: default, success, warning, danger and info">
</demo>

### Dark🌊

<demo src="./demo/en/deep.vue"
  language="vue"
  title="🌊basic usage"
  desc="dark color has stronger visual impact">
</demo>

### Dashed line🧵

<demo src="./demo/en/dashed.vue"
  language="vue"
  title="🧵basic usage"
  desc="support dotted line">
</demo>

### Size🔥

<demo src="./demo/en/size.vue"
  language="vue"
  title="🔥basic usage"
  desc="size of different buttons">
</demo>

### Text📑

<demo src="./demo/en/text.vue"
  language="vue"
  title="📑basic usage"
  desc="text button">
</demo>

### Disable🚫

<demo src="./demo/en/disabled.vue"
  language="vue"
  title="🚫basic usage"
  desc="disable button">
</demo>

### Icon button🐳

<demo src="./demo/en/icon.vue"
  language="vue"
  title="🐳basic usage"
  desc="The icon button expresses the meaning of the button">
</demo>

### Round⭕

<demo src="./demo/en/round.vue"
  language="vue"
  title="⭕basic usage"
  desc="The circle looks more silky">
</demo>

### Pre suffix🙌

<demo src="./demo/en/fix.vue"
  language="vue"
  title="🙌basic usage"
  desc="The meaning of words and icons is more clear">
</demo>

## Props

|   Parameter  |   description   |    type    |    default value    |
| :------: | :------: | :--------: | :------: | --------- | ------- | ---------- | ----------- |
|   type   | button theme | `'success' | 'danger' | 'warning' | 'info'  | 'default'` | `'default'` |
|   deep   | dark button | `boolean`  | `false`  |
|  dashed  | dashed button | `boolean`  | `false`  |
|   size   | button size |  `'small'  | 'medium' | 'large'   | 'huge'` | `meduim`   |
|   text   | text button | `boolean`  | `false`  |
| disabled | disable button | `boolean`  | `false`  |
|  round   | round icon | `boolean`  | `false`  |

## slots

|  parameter | description | type | value|
| :----: | :------: | :------: | :---------: |
| prefix | prefix Icon | `string` | `undefined` |
| suffix | suffix Icon | `string` | `undefined` |
