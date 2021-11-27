---
map:
    path: /components/tag
---

# Tag

This is a simple label

```js
import { UTag } from 'ungeui';
```

## Code demonstration

### Different themes

<demo src="./demo/theme.vue"
  language="vue"
  title="basic usage"
  desc="different types determine different topic types">
</demo>

### Different sizes

<demo src="./demo/size.vue"
  language="vue"
  title="basic usage"
  desc="add different size values">
</demo>

### Can be closed

<demo src="./demo/close.vue"
  language="vue"
  title="basic usage"
  desc="closed attribute controls whether to display closed">
</demo>

### Capsule label

<demo src="./demo/round.vue"
  language="vue"
  title="basic usage"
  desc="capsule fillet">
</demo>

### Disable

<demo src="./demo/disabled.vue"
  language="vue"
  title="basic usage"
  desc="event cannot be triggered after disabling">
</demo>

### Custom label color

<demo src="./demo/color.vue"
  language="vue"
  title="basic usage"
  desc="custom colors support hex and RGB">
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
