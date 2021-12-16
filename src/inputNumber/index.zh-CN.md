---
map:
   path: /components/inputNumber
---

# InputNumber🎛️

该组件用来控制数字的增加和减少

## 代码演示

```js
import { UInputNumber } from 'ungeui';
```

### 基本用法🚀

<demo src="./demo/base.vue"
 language="vue"
 title="🚀基本用法"
 desc="点击使数字增加或减少，或者直接从键盘输入">
</demo>

### 限制范围🚧

<demo src="./demo/limit.vue"
 language="vue"
 title="🚧基本用法"
 desc="限制数字的范围为5-10，输入超过时会取边界值">
</demo>

### 不同步幅🦶

<demo src="./demo/step.vue"
 language="vue"
 title="🦶基本用法"
 desc="设置最小变化幅度">
</demo>

### 不同大小🔥

<demo src="./demo/size.vue"
 language="vue"
 title="🔥基本用法"
 desc="InputNumber也预置了几种的不同大小，以适应不同场景">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| value(v-model) | 数字值 | `number` | `0` |
| step | 变化步幅 | `number` | `1` |
| max | 最大值 | `number` | `undefined` |
| min | 最小值 | `number` | `0` |
| on-change | 用户输入 | `(value) => void ` | `0` |
| on-increase | 用户点击增加 | `(value) => void ` | `undefined` |
| on-decrease | 用户点击减少 | `(value) => void ` | `undefined` |