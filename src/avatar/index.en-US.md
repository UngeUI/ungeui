---
map:
    path: /components/tag
---

# Avatar

The avatar can be an online logo of a person or object

```js
import { UAvatar } from 'ungeui';
```

## Code demonstration

### Different sizes

<demo src="./demo/demo.vue"
  language="vue"
  title="Basic useage"
  desc="Size controls the size of the avatar. The default background is gray">
</demo>

### Font size adaptive

<demo src="./demo/fit.vue"
  language="vue"
  title="Basic useage"
  desc="Ensure that the text does not overflow the avatar frame">
</demo>

### picture

<demo src="./demo/img.vue"
  language="vue"
  title="Basic useage"
  desc="Pictures can be inserted to support network resources and local resources">
</demo>

### circular

<demo src="./demo/round.vue"
  language="vue"
  title="Basic useage"
  desc="circular">
</demo>

## Props

| Property | Description |   Type |   Default |
| :--------: | :----------: | :-----: | :--------: |
| size  | Picture size | `'small'  |  'medium'   | 'large' | 'huge'` | `'medium'` |
|  src  | Picture linking | `string`  | `undefined` |
| round |  Picture fillet   | `boolean` |   `false`   |
