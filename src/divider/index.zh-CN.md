---
map:
    # 映射到docs的路径
    path: /components/divider
---

# Divider

分割线用于分割片段

```js
import { UDivider } from 'ungeui';
```

## 代码演示

### 分割线类型

<demo src="./demo/type.vue"
  language="vue"
  title="基本用法"
  desc="基本的实线、点线、虚线">
</demo>

### 加粗

<demo src="./demo/bold.vue"
  language="vue"
  title="基本用法"
  desc="加粗">
</demo>

### 自定义高度

<demo src="./demo/height.vue"
  language="vue"
  title="基本用法"
  desc="自定义线的高度">
</demo>

### 自定义颜色

<demo src="./demo/color.vue"
  language="vue"
  title="基本用法"
  desc="支持十六进制、RGBA">
</demo>

## Props

|  参数  |     说明     |   类型    |   默认值    |
| :----: | :----------: | :-------: | :---------: | 
|  type  | 分割线线类型 | `'solid'  |  'dashed'   | 'dotted'` | `'solid'` |
| height |  自定义高度  | `number`  |     `1`     |
|  bold  |     加粗     | `boolean` |   `false`   |
| color  |  自定义颜色  | `string`  | `'#cccccc'` |
