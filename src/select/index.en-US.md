---
map:
    path: /components/select
---

# Select

Drop down box

```js
import { USelect } from 'ungeui'
```

## Code demonstration

### Basic usage

<demo src="./demo/base.vue"
    language="vue"
    title="basic usage"
    desc="simplest usage">
</demo>

### Different sizes

<demo src="./demo/size.vue"
    language="vue"
    title="different sizes"
    desc="default to medium">
</demo>

### The value value is also displayed in option

<demo src="./demo/displayValue.vue"
    language="vue"
    title="basic usage"
    desc="display value at the same time">
</demo>

## Props

| Parameter|  description | type | default value|
| :------: | :------: | :-------: | :-----: |
| placeholder | default content  | `number | boolean | string` | "请选择" |
| value | selected value  | `number | boolean | string | object` | "请选择" |
| on-update:value | callback | `(e: Event) => value` |  `undefined` |
| display | display value in option  | `boolean` | `false` |