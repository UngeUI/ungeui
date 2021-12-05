---
map:
   path: /components/spin
---

# Spin💫

Represents the state in loading

## Code demonstration

```js
import { USpin } from 'ungeui';
```

### Basic useage🔥

<demo src="./demo/base.vue"
 language="vue"
 title="🔥Basic useage"
 desc="define spins of different sizes">
</demo>

### Custom color🌈

<demo src="./demo/color.vue"
 language="vue"
 title="🌈Basic useage"
 desc="multiple colors further divide the semantics of loading status">
</demo>

### Custom Icon🧰

<demo src="./demo/slots.vue"
 language="vue"
 title="🧰Basic useage"
 desc="you may want to use your own icon">
</demo>

## Props

| Property | Description |   Type |   Default |
| :--------: | :----------: | :-----: | :--------: |
| size | Spin size | `small | medium | large | huge` | `medium` |
| color | Spin color | `String` | `#13C2C2` |

## Slots

| Property | Description |   Type |   Default |
| :---: | :------: | :-------: | :---------: |
| default | Icon | VNode |  `<Spin />`| 