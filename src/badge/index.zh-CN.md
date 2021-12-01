---
map:
   path: /components/badge
---

# Badge

这里是Badge组件

```js
import { UBadge } from 'ungeui';
```

## 代码演示

### 基本用法

<demo src="./demo/base.vue"
 language="vue"
 title="基本用法"
 desc="和头像很搭">
</demo>

### 不同背景颜色

<demo src="./demo/color.vue"
 language="vue"
 title="基本用法"
 desc="不同背景颜色">
</demo>

### 上下限

<demo src="./demo/over.vue"
 language="vue"
 title="基本用法"
 desc="设置上限">
</demo>

### 是否显示下限值

<demo src="./demo/lower.vue"
 language="vue"
 title="基本用法"
 desc="到达最小值时，是否显示下限值">
</demo>

### 点

<demo src="./demo/dot.vue"
 language="vue"
 title="基本用法"
 desc="点">
</demo>

### 其他组合

<demo src="./demo/other.vue"
 language="vue"
 title="基本用法"
 desc="其他组合">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| value | 显示的值 ｜ `number | string` | `undefined` |
| color | 背景颜色 ｜ `string` | `#FF4D4F` |
| max | 上限值 ｜ `number` | `undefined` |
| min | 下限值 ｜ `number` | `0` |
| hideLowerLimit | 到达下限值时候是否隐藏 ｜ `boolean` | `false` |
| dot | 是否以圆点显示 ｜ `boolean` | `false` |