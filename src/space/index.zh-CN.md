---
map:
   path: /components/space
---

# Space🚧

Space组件用于产生间隙，分割多个子组件

## 代码演示

```js
import { USpace } from 'ungeui';
```

### 基本用法🚀

<demo src="./demo/base.vue"
 language="vue"
 title="🚀基本用法"
 desc="使用该组件会覆盖子元素自带的边距">
</demo>

### 自定义间隙🌌

<demo src="./demo/gap.vue"
 language="vue"
 title="🌌基本用法"
 desc="控制间隙大小">
</demo>

### 垂直🖕🏻

<demo src="./demo/vertical.vue"
 language="vue"
 title="🖕🏻基本用法"
 desc="使子元素垂直显示">
</demo>

### JustifyContent🕹️

<demo src="./demo/justify.vue"
 language="vue"
 title="🕹️基本用法"
 desc="使子元素对齐">
</demo>

### AlignContent🛌

在水平情况下，会自动使元素在垂直方向居中，这可能不是你想要的结果，那么你可以通过align属性改变它

<demo src="./demo/align.vue"
 language="vue"
 title="🛌基本用法"
 desc="定义垂直对齐方式">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| vertical | 是否垂直显示 | `boolean` | `false` |
| justify | 对齐方式 | `同css的justif-content属性值` | `start` |
| align | 垂直对齐方式（vertical不为ture时生效） | `同css的align-items属性值` | `center` |