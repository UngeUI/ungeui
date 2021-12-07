---
map:
    path: /components/checkbox
---

# Checkbox💠

Multiple boxes allow you to select multiple options at the same time

## Code demonstration

```js
import { UCheckbox } from 'ungeui
```

### Basic usage🖱️

<demo src="./demo/checked.vue"
  language="vue"
  title="🖱️basic usage"
  desc="Click to switch options">
</demo>

### Multiple selection group🔱

<demo src="./demo/group.vue"
  language="vue"
  title="🔱basic usage"
  desc="more elegant group control">
</demo>

### Disable🚫

<demo src="./demo/disabled.vue"
  language="vue"
  title="🚫basic usage"
  desc="Disabled disables the multi selection box and the color turns gray">
</demo>

## Props

|   Parameter   | description   |  type | default value  |
| :------: | :------: | :-------: | :-----: |
| checked | check  | `boolean`  | `false` |
| disabled | disable  | `boolean`  | `false` |