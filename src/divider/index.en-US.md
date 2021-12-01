---
map:
    path: /components/divider
---

# Divider✂

Split lines are used to split clips

## Code demonstration

```js
import { UDivider } from 'ungeui';
```

### Split line type🚀

<demo src="./demo/type.vue"
  language="vue"
  title="🚀basic usage"
  desc="It includes basic solid lines, dotted lines, dotted lines, and all types supported by border-style">
</demo>

### Bold➕

<demo src="./demo/bold.vue"
  language="vue"
  title="➕basic usage"
  desc="Use the bold attribute to bold the split line. The height becomes 2px">
</demo>

### Custom height🌋

<demo src="./demo/height.vue"
  language="vue"
  title="🌋basic usage"
  desc="custom line height">
</demo>

### Custom color

<demo src="./demo/color.vue"
  language="vue"
  title="basic usage"
  desc="support HEX and RGB, Now the colors are rich">
</demo>

## Props

|  Parameter | description | type | default value|
| :----: | :----------: | :-------: | :---------: | 
|  type  |  split line type | `'solid'  |  'dashed'   | 'dotted'` | `'solid'` |
| height |  custom height  | `number`  |  `1`     |
|  bold  |     bold      | `boolean` |   `false`   |
| color  |  custom color  | `string`  | `'#cccccc'` |
