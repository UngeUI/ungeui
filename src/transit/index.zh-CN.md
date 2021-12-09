---
map:
   path: /components/transit
---

# Transit🔢

一个神奇的组件，让数字也有过渡变化！

## 代码演示

```js
import { UTransit } from 'ungeui';
```

### 基本用法📦️

注意，组件内部会使用`Number()`对子元素转换，所以该组件的直接子元素必须是数字⚠️

<demo src="./demo/base.vue"
 language="vue"
 title="📦️基本用法"
 desc="包裹的数字值变化时，数字大小会自动过渡">
</demo>

### 自定义过渡时间⏱

<demo src="./demo/delay.vue"
 language="vue"
 title="⏱基本用法"
 desc="设置过渡时间为2秒，默认为0.5s">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| duration | 过渡持续时间，单位秒 ｜ `number` |  `0.5`|