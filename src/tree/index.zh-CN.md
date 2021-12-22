---
map:
   path: /components/tree
---

# Tree🎄

适合展示树形结构的数据

## 代码演示

```js
import { UTree } from 'ungeui';
```

### 基本用法🚀

<demo src="./demo/base.vue"
 language="vue"
 title="🚀基本用法"
 desc="箭头控制子元素的显示">
</demo>

### 多选💠

<demo src="./demo/checkable.vue"
 language="vue"
 title="💠基本用法"
 desc="可以选择任意一个节点">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| data | 展示的数形数据 | `array` | `[]` | 
| checkable | 是否多选 | `boolean` | `false` | 
| checkedKeys | 选中节点的key值 | `array` | `[]` | 