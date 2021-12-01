---
map:
    path: /components/avatar
---

# Avatar🤡

Use avatar to represent your identity on the network, and support avatar and text

## Code demonstration

```js
import { UAvatar } from 'ungeui';
```

### Different sizes🔥

<demo src="./demo/size.vue"
  language="vue"
  title="🔥basic usage"
  desc="Size controls the size of the avatar. When there is no avatar filling, the default background is gray">
</demo>

### Font size adaptation🙏

<demo src="./demo/fit.vue"
  language="vue"
  title="🙏basic usage"
  desc="The filled content can be text. If the text is too long, it will be reduced appropriately to ensure that the text does not overflow the avatar frame">
</demo>

### Picture🧩

<demo src="./demo/img.vue"
  language="vue"
  title="🧩basic usage"
  desc="pictures can be inserted to support network resources and local">
</demo>

### Round⭕

<demo src="./demo/round.vue"
  language="vue"
  title="⭕basic usage"
  desc="Round head sometimes looks more suitable for your application. It looks cute, doesn't it?">
</demo>

## Props

| Parameter | description | type | default value |
| :---: | :------: | :-------: | :---------: | ------- | ------- | ---------- |
| size  | picture size | `'small'  |  'medium'   | 'large' | 'huge'` | `'medium'` |
|  src  | picture link | `string`  | `undefined` |
| round |   round   | `boolean` |   `false`   |
