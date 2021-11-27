---
map:
   path: /components/space
---

# Space

Here is the space component

```js
import { USpace } from 'ungeui';
```

## Code demonstration

### Basic usage

<demo src="./demo/base.vue"
 language="vue"
 title="basic usage"
 desc="the margin of the child element will be overwritten">
</demo>

### Control gap

<demo src="./demo/grap.vue"
 language="vue"
 title="basic usage"
 desc="control gap">
</demo>


### Vertical

<demo src="./demo/vertical.vue"
 language="vue"
 title="basic usage"
 desc="make child elements display vertically">
</demo>

### JustifyContent

<demo src="./demo/justify.vue"
 language="vue"
 title="basic usage"
 desc="align child elements">
</demo>

### AlignContent

In the horizontal case, it will automatically center the element in the vertical direction. This may not be the result you want, so you can change it through the align attribute

<demo src="./demo/align.vue"
 language="vue"
 title="basic usage"
 desc="">
</demo>

## Props

| Parameter | description | type | default value|
| :---: | :------: | :-------: | :---------: |
| vertical | display vertically | `boolean` | `false` |
| justify | alignment  | `same as the align items attribute value of CSS` | `start` |
| align |  vertical alignment (effective when vertical is not true) | `同css的align-items属性值` | `center` |