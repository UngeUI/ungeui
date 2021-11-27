---
map:
    path: /components/switch
---

# Switch

switch

```js
import { USwitch } from 'ungeui'
```

## Code demonstration

### basic usage

<demo src="./demo/base.vue"
    language="vue"
    title="basic usage"
    desc="simplest usage">
</demo>

### Different sizes

<demo src="./demo/size.vue"
    language="vue"
    title="basic usage"
    desc="different sizes">
</demo>

### Custom value

<demo src="./demo/value.vue"
    language="vue"
    title="basic usage"
    desc="define selected value and unselected value">
</demo>

## Props

|  Parameter | description | type | default value|
| :------: | :------: | :-------: | :-----: |
| checked  | check  | `boolean` | `false` |
| size  | switch size | `'small' | 'medium' | 'large'` | `'medium'` | 
| checkedValue | selected value |  `boolean | string | number` | `true` |
| uncheckedValue | not selected value |  `boolean | string | number` | `false` |
| on-Change | event triggered by the switch button |  `(e:MouseEvent) => void` | `undefined` |
