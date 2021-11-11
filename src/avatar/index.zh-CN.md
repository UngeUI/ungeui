---
map:
    # 映射到docs的路径
    path: /components/avatar
---

# Avatar

头像可以是人或者物品的网上标识

```js
import { UAvatar } from 'ungeui';
```

## 代码演示

### 不同大小

<demo src="./demo/size.vue"
  language="vue"
  title="基本用法"
  desc="size控制头像的大小，默认背景为灰色">
</demo>

### 字号自适应功能

<demo src="./demo/fit.vue"
  language="vue"
  title="基本用法"
  desc="保证文字不溢出头像框">
</demo>

### 图片

<demo src="./demo/img.vue"
  language="vue"
  title="基本用法"
  desc="可以插入图片，支持网络资源与本地资源">
</demo>

### 圆形

<demo src="./demo/round.vue"
  language="vue"
  title="基本用法"
  desc="圆形头像">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: | ------- | ------- | ---------- |
| size  | 图片大小 | `'small'  |  'medium'   | 'large' | 'huge'` | `'medium'` |
|  src  | 图片链接 | `string`  | `undefined` |
| round |   圆角   | `boolean` |   `false`   |
