---
map:
    path: /components/divider
---

# Divider

Split lines are used to split clips

```js
import { UDivider } from 'ungeui';
```

## Code demonstration

### Split line type

<demo src="./demo/type.vue"
  language="vue"
  title="basic usage"
  desc="basic solid line, dotted line, dotted line">
</demo>

### Bold

<demo src="./demo/bold.vue"
  language="vue"
  title="basic usage"
  desc="bold">
</demo>

### Custom height

<demo src="./demo/height.vue"
  language="vue"
  title="basic usage"
  desc="custom line height">
</demo>

### Custom color

<demo src="./demo/color.vue"
  language="vue"
  title="basic usage"
  desc="support HEX and RGBA">
</demo>

## Props

|  Parameter | description | type | default value|
| :----: | :----------: | :-------: | :---------: | 
|  type  |  split line type | `'solid'  |  'dashed'   | 'dotted'` | `'solid'` |
| height |  custom height  | `number`  |  `1`     |
|  bold  |     bold      | `boolean` |   `false`   |
| color  |  custom color  | `string`  | `'#cccccc'` |
