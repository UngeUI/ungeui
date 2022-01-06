---
map:
    path: /components/select
---

# Select🔽

You can use it when there are too many options to keep the page clean and tidy

## Code demonstration

```js
import { USelect } from 'ungeui'
```

### Basic usage🌠

<demo src="./demo/en/base.vue"
    language="vue"
    title="🌠basic usage"
    desc="The surface displays the label value to the user, and the actual internal transfer value">
</demo>

### Different sizes🔥

<demo src="./demo/en/size.vue"
    language="vue"
    title="🔥different sizes"
    desc="Three sizes of drop-down boxes are provided, and the default is medium">
</demo>

### Display value😃😭😩

<demo src="./demo/en/displayValue.vue"
    language="vue"
    title="😃😭😩basic usage"
    desc="The value value is also displayed to the user">
</demo>

## Props

| Parameter|  description | type | default value|
| :------: | :------: | :-------: | :-----: |
| placeholder | default content  | `number | boolean | string` | "请选择" |
| value | selected value  | `number | boolean | string | object` | "请选择" |
| on-update:value | callback | `(e: Event) => value` |  `undefined` |
| display | display value in option  | `boolean` | `false` |