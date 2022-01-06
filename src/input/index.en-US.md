---
map:
    path: /components/input
---

# Input⌨️

Get the information you want to transfer through the input box

## Code demonstration

```js
import { UInput } from 'ungeui';
```

### Bidirectional binding🤝

<demo src="./demo/en/reactive.vue"
  language="vue"
  title="🤝basic usage"
  desc="Bind user entered values">
</demo>

### Different sizes🔥

<demo src="./demo/en/size.vue"
  language="vue"
  title="🔥basic usage"
  desc="size control the size of the input box">
</demo>

### Password box🙈

<demo src="./demo/en/password.vue"
  language="vue"
  title="🙈basic usage"
  desc="the password box is used to hide the entered characters">
</demo>

### Icon slot🙌

<demo src="./demo/en/icon.vue"
  language="vue"
  title="🙌basic usage"
  desc="You can insert icon to make it more semantic and tell the user the type that should be entered here">
</demo>

### Textarea📋️

<demo src="./demo/en/textarea.vue"
  language="vue"
  title="📋️basic usage"
  desc="It supports the representation in the form of text field">
</demo>

### Custom rows/cols🥨

<demo src="./demo/en/rowscols.vue"
  language="vue"
  title="🥨basic usage"
  desc="The number of custom rows and columns is the same as the original usage">
</demo>

### Disable🚫

<demo src="./demo/en/disabled.vue"
  language="vue"
  title="🚫basic usage"
  desc="When disabled, the user cannot enter anything">
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
