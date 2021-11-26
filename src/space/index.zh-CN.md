---
map:
   path: /components/space
---

# Space

这里是Space组件

```js
import { USpace } from 'ungeui';
```

## 代码演示

### 基本用法

<demo src="./demo/base.vue"
 language="vue"
 title="基本用法"
 desc="会覆盖子元素自带的边距">
</demo>

### 控制间隙

<demo src="./demo/grap.vue"
 language="vue"
 title="基本用法"
 desc="使子元素垂直显示">
</demo>


### 垂直

<demo src="./demo/vertical.vue"
 language="vue"
 title="基本用法"
 desc="使子元素垂直显示">
</demo>

### 对齐

<demo src="./demo/justify.vue"
 language="vue"
 title="基本用法"
 desc="使子元素对齐">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| vertical | 是否垂直显示 | `boolean` | `false` |
| justify | 对其方式 | `同css的justif-content属性值` | `start` |