---
map:
    path: /components/checkbox
---

# Checkbox💠

多选框可以同时选择多个选项

## 代码演示

```js
import { UCheckbox } from 'ungeui
```

### 基本用法🖱️

<demo src="./demo/checked.vue"
  language="vue"
  title="🖱️基本用法"
  desc="点击切换选项">
</demo>

### 多选组🔱

<demo src="./demo/group.vue"
  language="vue"
  title="🔱基本用法"
  desc="更优雅的组别控制">
</demo>

### 禁用🚫

<demo src="./demo/disabled.vue"
  language="vue"
  title="🚫基本用法"
  desc="disabled使多选框失效，并且颜色会变成灰色">
</demo>

## Props

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| checked | 是否选中 | `boolean`  | `false` |
| disabled | 是否禁用 | `boolean`  | `false` |