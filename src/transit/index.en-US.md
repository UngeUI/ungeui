---
map:
   path: /components/transit
---

# Transit

A magical component, let the number also have transitional changes!

## Code demonstration

```js
import { UTransit } from 'ungeui';
```

### Basic useage📦️

Note that `Number()` will be used inside the component to convert child elements, so the direct child elements of the component must be numbers⚠️

<demo src="./demo/base.vue"
 language="vue"
 title="📦️Basic useage"
 desc="When the digital value of the package changes, the digital size will transition automatically">
</demo>

### Custom transition time⏱

<demo src="./demo/delay.vue"
 language="vue"
 title="⏱Basic useage"
 desc="Set the transition time to 2 seconds, the default is 0.5s">
</demo>

## Props

| Property | Description |   Type |   Default |
| :--------: | :----------: | :-----: | :--------: |
| duration | Duration of transition, the unit is ms | `number` | `500`