---
map:
    path: /components/switch
---

# Switch🌗

The switch is used to switch between two different states

## Code demonstration

```js
import { USwitch } from 'ungeui'
```

### basic usage🖱️

<demo src="./demo/en/base.vue"
    language="vue"
    title="🖱️basic usage"
    desc="Click to switch the value. When the background is lit, it represents true, otherwise it is false">
</demo>

### Different sizes🔥

<demo src="./demo/en/size.vue"
    language="vue"
    title="🔥basic usage"
    desc="Switches are also preset with several different sizes to adapt to different scenarios">
</demo>

### Custom value🌈

<demo src="./demo/en/value.vue"
    language="vue"
    title="🌈basic usage"
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
