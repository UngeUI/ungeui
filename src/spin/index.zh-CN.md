---
map:
   path: /components/spin
---

# Spin💫

代表加载中的状态

## 代码演示

```js
import { USpin } from 'ungeui';
```

### 基本用法🔥

<demo src="./demo/base.vue"
 language="vue"
 title="🔥基本用法"
 desc="定义不同大小的Spin">
</demo>

### 自定义颜色🌈

<demo src="./demo/color.vue"
 language="vue"
 title="🌈基本用法"
 desc="多种颜色对加载状态进一步划分语义">
</demo>

### 自定义Icon🧰

<demo src="./demo/slots.vue"
 language="vue"
 title="🧰基本用法"
 desc="你可能想用自己定义的Icon">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| size | Spin 大小 | `small | medium | large | huge` | `medium` |
| color | Spin 颜色 | `String` | `#13C2C2` |


## Slots

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| default | Icon图标 | VNode |  `<Spin />`| 