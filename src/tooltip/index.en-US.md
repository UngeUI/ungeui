---
map:
   path: /components/tooltip
---

# Tooltip💬

Tooltip is like a bubble, with more information in the appropriate actual prompt

## Code demonstration

```js
import { UTooltip } from 'ungeui';
```

### Basic usage🕹️

<demo src="./demo/en/base.vue"
 language="vue"
 title="🕹️basic usage"
 desc="Four basic orientations are preset">
</demo>

### Custom color🌈

<demo src="./demo/en/color.vue"
 language="vue"
 title="🌈basic usage"
 desc="custom color">
</demo>

## Props

| Parameter | description | type | default value|
| :---: | :------: | :-------: | :---------: |
| placement | where the tooltip appears | `top | right | bottom |left` | `top`
| color | tooltip background color | `same as bgcolor of css` | `rgba(0,0,0,.8)`