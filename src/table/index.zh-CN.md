---
map:
    path: /components/table
---

# Tableð

è¡¨æ ¼ç¨äºç´è§å¯¹æ¯å±ç¤ºå¤§éçæ°æ®

## ä»£ç æ¼ç¤º

```js
import { UTable } from 'ungeui'
```

### åºæ¬ç¨æ³ð

<demo src="./demo/base.vue"
    language="vue"
    title="ðåºæ¬ç¨æ³"
    desc="æ¯ä¸æ¡ä¿¡æ¯å ç¨ä¸è¡">
</demo>

### èªå®ä¹ååå®¹ð

<demo src="./demo/render.vue"
    language="vue"
    title="ðåºæ¬ç¨æ³"
    desc="èªå®ä¹ååå®¹">
</demo>

### å·¦å³åºå®ð

<demo src="./demo/fixed.vue"
    language="vue"
    title="ðåºæ¬ç¨æ³"
    desc="åºå®æä¸åï¼ä¿è¯ç¨æ·ä¸ç´è½çå°">
</demo>

## Table Props

|   åæ°   |   è¯´æ   |   ç±»å    | é»è®¤å¼  |
| :------: | :------: | :-------: | :-----: |
| data | éè¦å±ç¤ºçæ°æ® | `array` | `[]` |
| column | éè¦å±ç¤ºçå | `array<DataTableColumn>` | `[]` |

## DataTableColumn

|   åæ°   |   è¯´æ   |   ç±»å    | é»è®¤å¼  |
| :------: | :------: | :-------: | :-----: |
| title   | åç title ä¿¡æ¯ | `String` | `undefined`|
| key   | è¿ä¸åç keyï¼ä¸å¯éå¤ | `String | number` | `undefined`|
| width   | è¿ä¸åç å®½åº¦ | `String ` | `undefined`|
| fixed   | å·¦å³åºå® | `left | right ` | `''`|
