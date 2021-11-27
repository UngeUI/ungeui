---
map:
   path: /components/tooltip
---

# Tooltip

这里是Tooltip组件

```js
import { UTooltip } from 'ungeui';
```

## 代码演示

### 基本用法

<demo src="./demo/base.vue"
 language="vue"
 title="基本用法"
 desc="基本用法">
</demo>

### 自定义颜色

<demo src="./demo/color.vue"
 language="vue"
 title="基本用法"
 desc="自定义颜色">
</demo>
## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| placement | Tooltip出现的位置 | `top | right | bottom |left` | `top`
| color | Tooltip背景颜色 | `同CSS的bgColor` | `rgba(0,0,0,.8)`