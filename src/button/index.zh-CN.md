---
map:
    path: /components/button
---

# Buttonð

æé®ææ´å¼ºççäº¤äºæè§

## ä»£ç æ¼ç¤º

```js
import { UButton } from 'ungeui';
```

### ç¹å»è§¦åð±ï¸

<demo src="./demo/default.vue"
  language="vue"
  title="ð±ï¸åºæ¬ç¨æ³"
  desc="ç¹å»æé®æ°é+1">
</demo>

### ä¸åä¸»é¢ð

<demo src="./demo/theme.vue"
  language="vue"
  title="ðåºæ¬ç¨æ³"
  desc="ä¸åçtypeå³å®ä¸åçä¸»é¢ç±»åï¼é»è®¤æä¾äºäºç§ä¸»é¢ï¼defaultãsuccessãwarningãdangerãinfo">
</demo>

### æ·±è²ð

<demo src="./demo/deep.vue"
  language="vue"
  title="ðåºæ¬ç¨æ³"
  desc="æ·±è²å·ææ´å¼ºççè§è§å²å»">
</demo>

### èçº¿ð§µ

<demo src="./demo/dashed.vue"
  language="vue"
  title="ð§µåºæ¬ç¨æ³"
  desc="æ¯æèçº¿">
</demo>

### å¤§å°ð¥

<demo src="./demo/size.vue"
  language="vue"
  title="ð¥åºæ¬ç¨æ³"
  desc="ä¸åæé®çå¤§å°">
</demo>

### ææ¬ð

<demo src="./demo/text.vue"
  language="vue"
  title="ðåºæ¬ç¨æ³"
  desc="ææ¬æé®æ²¡ææ³¢çº¹å¨ç»ï¼å®å¾æ´ç´ ">
</demo>

### ç¦ç¨ð«

<demo src="./demo/disabled.vue"
  language="vue"
  title="åºæ¬ç¨æ³"
  desc="ð«ç¦ç¨æé®">
</demo>

### å¾æ æé®ð³

<demo src="./demo/icon.vue"
  language="vue"
  title="ð³åºæ¬ç¨æ³"
  desc="å¾æ æé®è¡¨è¾¾æé®æä¹">
</demo>

### åå½¢â­

<demo src="./demo/round.vue"
  language="vue"
  title="â­åºæ¬ç¨æ³"
  desc="åå½¢çèµ·æ¥æ´å ä¸æ»">
</demo>

### ååç¼ð

<demo src="./demo/fix.vue"
  language="vue"
  title="ðåºæ¬ç¨æ³"
  desc="æå­å å¾æ è¡¨è¾¾çæææ´å æç¡®">
</demo>

## Props

|   åæ°   |   è¯´æ   |    ç±»å    |    é»è®¤å¼    |
| :------: | :------: | :--------: | :------: | --------- | ------- | ---------- | ----------- |
|   type   | æé®ä¸»é¢ | `'success' | 'danger' | 'warning' | 'info'  | 'default'` | `'default'` |
|   deep   | æ·±è²æé® | `boolean`  | `false`  |
|  dashed  | èçº¿æé® | `boolean`  | `false`  |
|   size   | æé®å¤§å° |  `'small'  | 'medium' | 'large'   | 'huge'` | `meduim`   |
|   text   | ææ¬æé® | `boolean`  | `false`  |
| disabled | ç¦ç¨æé® | `boolean`  | `false`  |
|  round   | åå½¢å¾æ  | `boolean`  | `false`  |

## slots

|  åæ°  |   è¯´æ   |   ç±»å   |     å¼      |
| :----: | :------: | :------: | :---------: |
| prefix | åç¼å¾æ  | `string` | `undefined` |
| suffix | åç¼å¾æ  | `string` | `undefined` |
