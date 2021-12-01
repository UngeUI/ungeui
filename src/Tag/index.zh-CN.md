---
map:
    path: /components/tag
---

# Tag🏷

通常用来展示一些属性，偶尔也用来当一些备选的属性

## 代码演示

```js
import { UTag } from 'ungeui';
```

### 不同主题🚀

<demo src="./demo/theme.vue"
  language="vue"
  title="🚀基本用法"
  desc="不同的type决定不同的主题类型，默认提供了五种主题：default、success、warning、danger、info">
</demo>

### 不同大小🔥

<demo src="./demo/size.vue"
  language="vue"
  title="🔥基本用法"
  desc="添加不同的size值可以改变标签的大小">
</demo>

### 可关闭❌

<demo src="./demo/close.vue"
  language="vue"
  title="❌基本用法"
  desc="closable属性控制是否显示关闭，并且你可以监听这个关闭事件">
</demo>

### 胶囊标签💊

<demo src="./demo/round.vue"
  language="vue"
  title="💊基本用法"
  desc="它看起来像一个胶囊，也许就是...">
</demo>

### 禁用🚫

<demo src="./demo/disabled.vue"
  language="vue"
  title="🚫基本用法"
  desc="禁用后无法触发事件，也无法选中文字">
</demo>

### 自定义标签颜色🌈

<demo src="./demo/color.vue"
  language="vue"
  title="🌈基本用法"
  desc="自定义颜色支持十六进制和RGB，你可以用你喜欢的颜色！">
</demo>

## Props

|   参数   |       说明       |           类型           |   默认值    |
| :------: | :--------------: | :----------------------: | :---------: | --------- | ---------- | --------- | ----------- |
|   type   |     标签主题     |        `'default'        |  'success'  | 'warning' | 'info'     | 'danger'` | `'default'` |
|   size   |     标签大小     |         `'small'         |  'medium'   | 'large'`  | `'medium'` |
|  color   |   标签背景颜色   |         `string`         | `undefined` |
|  round   |     胶囊圆角     |        `boolean`         |   `false`   |
| closable |      可关闭      |        `boolean`         |   `false`   |
| disabled |       禁用       |        `boolean`         |   `false`   |
| on-Close | 点击关闭时的回调 | `(e:MouseEvent) => void` | `undefined` |
