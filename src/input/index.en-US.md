---
map:
    path: /components/input
---

# Input

Get the user's information through the input box

```js
import { UInput } from 'ungeui';
```

## Code demonstration

### Bidirectional binding

<demo src="./demo/reactive.vue"
  language="vue"
  title="basic usage"
  desc="bidirectional binding">
</demo>

### Different sizes

<demo src="./demo/size.vue"
  language="vue"
  title="basic usage"
  desc="size control the size of the input box">
</demo>

### Password box

<demo src="./demo/password.vue"
  language="vue"
  title="basic usage"
  desc="the password box is used to hide the entered characters">
</demo>

### Icon slot

<demo src="./demo/icon.vue"
  language="vue"
  title="basic usage"
  desc="icon can be inserted to make it more semantic">
</demo>

### Textarea

<demo src="./demo/textarea.vue"
  language="vue"
  title="basic usage"
  desc="support text field">
</demo>

### Custom rows/cols

<demo src="./demo/rowscols.vue"
  language="vue"
  title="basic usage"
  desc="custom lines">
</demo>

### Disable

<demo src="./demo/disabled.vue"
  language="vue"
  title="basic usage"
  desc="disable">
</demo>

## Props

| Parameter | description | type | default value |
| :------: | :--------: | :-------: | :--------: | ------------ | ---------- |
|   size   | input box size | `'small'  |  'medium'  | 'large'`     | `'medium'` |
|   type   | input box type |  `'text'  | 'textarea' | 'password' ` | `'text'`   |
|   rows   |    rows    | `number`  |    `4`     |
|   cols   |    cols    | `number`  |    `4`     |
| disabled |  disable  | `boolean` |  `false`   |

## Slots

| Parameter | description | type | default value|
| :----: | :--------: | :------: | :---------: |
| prefix | prefix  | `string` | `undefined` |
| suffix | suffix | `string` | `undefined` |
