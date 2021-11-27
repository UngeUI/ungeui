---
map:
    path: /components/avatar
---

# Avatar

The avatar can be an online logo of a person or object

```js
import { UAvatar } from 'ungeui';
```

## Code demonstration

### Different sizes

<demo src="./demo/size.vue"
  language="vue"
  title="basic usage"
  desc="size controls the size of the avatar. The default background is gray">
</demo>

### Font size adaptive function

<demo src="./demo/fit.vue"
  language="vue"
  title="basic usage"
  desc="ensure that the text does not overflow the avatar frame">
</demo>

### Picture

<demo src="./demo/img.vue"
  language="vue"
  title="basic usage"
  desc="pictures can be inserted to support network resources and local">
</demo>

### Round

<demo src="./demo/round.vue"
  language="vue"
  title="basic usage"
  desc="round head">
</demo>

## Props

| Parameter | description | type | default value |
| :---: | :------: | :-------: | :---------: | ------- | ------- | ---------- |
| size  | picture size | `'small'  |  'medium'   | 'large' | 'huge'` | `'medium'` |
|  src  | picture link | `string`  | `undefined` |
| round |   round   | `boolean` |   `false`   |
