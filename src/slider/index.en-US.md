---
map:
   path: /components/slider
---

# Slider

Here is the slider component

```js
import { USlider } from 'ungeui';
```

## Code demonstration

### Basic usage

<demo src="./demo/base.vue"
 language="vue"
 title="basic usage"
 desc="define boundary by Max and Min">
</demo>

### Range value

<demo src="./demo/double.vue"
 language="vue"
 title="basic usage"
 desc="when value is an array and range is true, the range value can be obtained">
</demo>

## Props

| Parameter | description | type | default value|
| :---: | :------: | :-------: | :---------: |
| value | value of slider | `number | array ` | `0` |
| range | is the range | `boolean` | `false` |
| max | range Max | `number` | `100` |
| min | range MIn | `number` | `0` |