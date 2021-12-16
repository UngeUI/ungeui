---
map:
   path: /components/slider
---

# Slider🛹

通过滑动的方式选择值和范围

## 代码演示

```js
import { USlider } from 'ungeui';
```

### 基本用法🚀

<demo src="./demo/base.vue"
 language="vue"
 title="🚀基本用法"
 desc="通过max和min限定边界">
</demo>

### 范围值🕹

<demo src="./demo/double.vue"
 language="vue"
 title="🕹基本用法"
 desc="当value是数组并且range为ture时，可以获得范围值">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| value | 滑块的值 | `number | array ` | `0` |
| range | 是否是范围 | `boolean` | `false` |
| max | 范围最大值 | `number` | `100` |
| min | 范围最小值 | `number` | `0` |