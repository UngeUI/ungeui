---
map:
   path: /components/inputNumber
---

# InputNumber

这里是InputNumber组件

```js
import { UInputNumber } from 'ungeui';
```

## 代码演示

### 基本用法

<demo src="./demo/base.vue"
 language="vue"
 title="基本用法"
 desc="基本用法">
</demo>

### 不同步幅

<demo src="./demo/step.vue"
 language="vue"
 title="基本用法"
 desc="不同步幅">
</demo>

### 不同大小

<demo src="./demo/size.vue"
 language="vue"
 title="基本用法"
 desc="不同大小">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| value(v-model) | 数字值 | `number` | `0` |
| step | 变化步幅 | `number` | `1` |
| on-change | 用户输入 | `(value) => void ` | `0` |
| on-increase | 用户点击增加 | `(value) => void ` | `undefined` |
| on-decrease | 用户点击减少 | `(value) => void ` | `undefined` |