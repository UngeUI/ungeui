---
map:
   path: /components/inputNumber
---

# InputNumber

Here is the inputnumber component

```js
import { UInputNumber } from 'ungeui';
```

## Code demonstration

### Basic usage

<demo src="./demo/base.vue"
 language="vue"
 title="basic usage"
 desc="basic usage">
</demo>

### Different strides

<demo src="./demo/step.vue"
 language="vue"
 title="basic usage"
 desc="different strides">
</demo>

### Different sizes

<demo src="./demo/size.vue"
 language="vue"
 title="basic usage"
 desc="different sizes">
</demo>

## Props

| Parameter | description | type | default value|
| :---: | :------: | :-------: | :---------: |
| value(v-model) | value  | `number` | `0` |
| step | change step | `number` | `1` |
| on-change | user input | `(value) => void ` | `0` |
| on-increase | click Add | `(value) => void ` | `undefined` |
| on-decrease | click Minus | `(value) => void ` | `undefined` |