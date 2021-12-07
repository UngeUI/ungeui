---
map:
    path: /components/radio
---

# Radio⭕

通过单选框组件让用户作出选择

## 代码演示

```js
import { URadio } from 'ungeui';
```

### 基本用法🚀

<demo src="./demo/checked.vue"
  language="vue"
  title="🚀基本用法"
  desc="checked属性用于确定按钮是否选择">
</demo>

### 禁用🚫

<demo src="./demo/disabled.vue"
  language="vue"
  title="🚫基本用法"
  desc="disabled使单选框失效，并且颜色会变成灰色">
</demo>

### 单选组🚥

<demo src="./demo/group.vue"
  language="vue"
  title="🚥基本用法"
  desc="选项组用起来更方便">
</demo>

### 单选按钮⏺

<demo src="./demo/button.vue"
  language="vue"
  title="⏺基本用法"
  desc="有的时候用按钮显得更优雅一点">
</demo>

## Props

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| checked  | 是否选中 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
