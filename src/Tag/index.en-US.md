---
map:
    path: /components/tag
---

# Tag🏷

It is usually used to show some attributes, and occasionally used as some alternative attributes

## Code demonstration

```js
import { UTag } from 'ungeui';
```

### Different themes🚀

<demo src="./demo/en/theme.vue"
  language="vue"
  title="🚀basic usage"
  desc="different types determine different topic types, Five themes are provided by default: default、success、warning、danger、info">
</demo>

### Different sizes🔥

<demo src="./demo/en/size.vue"
  language="vue"
  title="🔥basic usage"
  desc="Adding different size values can change the size of the label">
</demo>

### Closed❌

<demo src="./demo/en/close.vue"
  language="vue"
  title="❌basic usage"
  desc="closed attribute controls whether to display closed">
</demo>

### Capsule label💊

<demo src="./demo/en/round.vue"
  language="vue"
  title="💊basic usage"
  desc="It looks like a capsule, maybe...">
</demo>

### Disable🚫

<demo src="./demo/en/disabled.vue"
  language="vue"
  title="🚫basic usage"
  desc="When disabled, events cannot be triggered and text cannot be selected">
</demo>

### Custom label color🌈

<demo src="./demo/en/color.vue"
  language="vue"
  title="🌈basic usage"
  desc="custom colors support hex and RGB, you can use the color you like!">
</demo>

## Props

| Parameter | description | type | default value|
| :------: | :--------------: | :----------------------: | :---------: | --------- | ---------- | --------- | ----------- |
|   type   |  tag theme |  `'default'  |  'success'  | 'warning' | 'info'     | 'danger'` | `'default'` |
|   size   |  tag size  | `'small'    |  'medium'   | 'large'`  | `'medium'` |
|  color   |  tag background color   |  `string`   | `undefined` |
|  round   |   capsule round   |   `boolean`   |  `false`   |
| closable |  closable   |   `boolean`   |   `false`   |
| disabled |   disabled    |  `boolean`  |   `false`   |
| on-Close | callback  | `(e:MouseEvent) => void` | `undefined` |
