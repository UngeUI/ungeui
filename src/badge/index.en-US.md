---
map:
   path: /components/badge
---

# Badge📢

It is used to describe the component state. When you see it, you will be very anxious and want to eliminate it

## Code demonstration

```js
import { UBadge } from 'ungeui';
```

### Basic useage❗

<demo src="./demo/en/base.vue"
 language="vue"
 title="Basic useage"
 desc="It matches the avatar and represents unread news">
</demo>

### Different background colors🌈

<demo src="./demo/en/color.vue"
 language="vue"
 title="🌈Basic useage"
 desc="maybe you want more than red, you can switch between different background colors">
</demo>

### Upper and lower limits🚧

<demo src="./demo/en/over.vue"
 language="vue"
 title="🚧Basic useage"
 desc="if you don't want to see the explosion message, set an upper limit">
</demo>

### Display lower limit value⛔

<demo src="./demo/en/lower.vue"
 language="vue"
 title="⛔Basic useage"
 desc="is the lower limit displayed or hidden when the minimum value is reached?">
</demo>

### Dot🔵🔴🟠🟢

<demo src="./demo/en/dot.vue"
 language="vue"
 title="🔵Basic useage"
 desc="quietly remind you of new messages">
</demo>

### Other combinations📁

<demo src="./demo/en/other.vue"
 language="vue"
 title="📁Basic useage"
 desc="it can also be used in other places">
</demo>

## Props

| Property | Description |  Type |   Default |
| :--------: | :----------: | :-----: | :--------: |
| value | displayed value ｜ `number | string` | `undefined` |
| color | background color ｜ `string` | `#FF4D4F` |
| max | upper limit ｜ `number` | `undefined` |
| min | lower limit ｜ `number` | `0` |
| hideLowerLimit | whether to hide when the lower limit is reached ｜ `boolean` | `false` |
| dot | whether to display as dots ｜ `boolean` | `false` |