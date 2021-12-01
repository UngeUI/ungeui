---
map:
    path: /components/divider
---

# Divider✂

分割线用于分割片段

## 代码演示

```js
import { UDivider } from 'ungeui';
```

### 分割线类型🚀

<demo src="./demo/type.vue"
  language="vue"
  title="🚀基本用法"
  desc="包括了基本的实线、点线、虚线，以及border-style支持的所有类型">
</demo>

### 加粗➕

<demo src="./demo/bold.vue"
  language="vue"
  title="➕基本用法"
  desc="使用bold属性即可加粗分割线。高度变为2px">
</demo>

### 自定义高度🌋

<demo src="./demo/height.vue"
  language="vue"
  title="🌋基本用法"
  desc="自定义线的高度">
</demo>

### 自定义颜色🌈

<demo src="./demo/color.vue"
  language="vue"
  title="🌈基本用法"
  desc="支持十六进制、RGB，现在颜色变得丰富了">
</demo>

## Props

|  参数  |     说明     |   类型    |   默认值    |
| :----: | :----------: | :-------: | :---------: | 
|  type  | 分割线线类型 | `'solid'  |  'dashed'   | 'dotted'` | `'solid'` |
| height |  自定义高度  | `number`  |     `1`     |
|  bold  |     加粗     | `boolean` |   `false`   |
| color  |  自定义颜色  | `string`  | `'#cccccc'` |
