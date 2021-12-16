---
map:
   path: /components/inputNumber
---

# InputNumber🎛️

This component is used to control the increase and decrease of numbers

## Code demonstration

```js
import { UInputNumber } from 'ungeui';
```

### Basic usage🚀

<demo src="./demo/base.vue"
 language="vue"
 title="🚀basic usage"
 desc="Click to increase or decrease the number, or enter it directly from the keyboard">
</demo>

### 限制范围🚧

<demo src="./demo/limit.vue"
 language="vue"
 title="🚧基本用法"
 desc="The limit number range is 5-10. If the input exceeds, the boundary value will be taken">
</demo>

### Different strides🦶

<demo src="./demo/step.vue"
 language="vue"
 title="🦶basic usage"
 desc="Set minimum change amplitude">
</demo>

### Different sizes🔥

<demo src="./demo/size.vue"
 language="vue"
 title="🔥basic usage"
 desc="Inputnumber is also preset with several different sizes to adapt to different scenarios">
</demo>

## Props

| Parameter | description | type | default value|
| :---: | :------: | :-------: | :---------: |
| value(v-model) | value  | `number` | `0` |
| step | change step | `number` | `1` |
| max | max value | `number` | `undefined` |
| min | min value | `number` | `0` |
| on-change | user input | `(value) => void ` | `0` |
| on-increase | click Add | `(value) => void ` | `undefined` |
| on-decrease | click Minus | `(value) => void ` | `undefined` |