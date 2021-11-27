---
map:
    path: /components/button
---

# Button

This is a simple button

```js
import { UButton } from 'ungeui';
```

## Code demonstration

### basic usage

<demo src="./demo/default.vue"
  language="vue"
  title="basic usage"
  desc="click to switch">
</demo>

### Dark

<demo src="./demo/deep.vue"
  language="vue"
  title="basic usage"
  desc="dark color has stronger visual impact">
</demo>

### Dashed line

<demo src="./demo/dashed.vue"
  language="vue"
  title="basic usage"
  desc="support dotted line">
</demo>

### Size

<demo src="./demo/size.vue"
  language="vue"
  title="basic usage"
  desc="size of different buttons">
</demo>

### Text

<demo src="./demo/text.vue"
  language="vue"
  title="basic usage"
  desc="text button">
</demo>

### Disable

<demo src="./demo/disabled.vue"
  language="vue"
  title="basic usage"
  desc="disable button">
</demo>

### Icon button

<demo src="./demo/icon.vue"
  language="vue"
  title="basic usage"
  desc="picture button expresses button meaning">
</demo>

### Round

<demo src="./demo/round.vue"
  language="vue"
  title="basic usage"
  desc="the circle is more silky">
</demo>

### Pre suffix

<demo src="./demo/fix.vue"
  language="vue"
  title="basic usage"
  desc="the meaning of text plus icon is clear">
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

|  参数  |   说明   |   类型   |     值      |
| :----: | :------: | :------: | :---------: |
| prefix | 前缀图标 | `string` | `undefined` |
| suffix | 后缀图标 | `string` | `undefined` |
