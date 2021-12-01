---
map:
    path: /components/avatar
---

# Avatar🤡

用头像代表你在网络上的身份，支持头像和文字

## 代码演示

```js
import { UAvatar } from 'ungeui';
```

### 不同大小🔥

<demo src="./demo/size.vue"
  language="vue"
  title="🔥基本用法"
  desc="size控制头像的大小，当没有头像填充时默认背景为灰色">
</demo>

### 字号自适应功能🙏

<demo src="./demo/fit.vue"
  language="vue"
  title="🙏基本用法"
  desc="填充内容可为文字，文字过长时会适当缩小，保证文字不溢出头像框">
</demo>

### 图片🧩

<demo src="./demo/img.vue"
  language="vue"
  title="🧩基本用法"
  desc="可以插入图片，支持网络资源与本地资源">
</demo>

### 圆形⭕

<demo src="./demo/round.vue"
  language="vue"
  title="⭕基本用法"
  desc="圆形头像有时候看起来更适合你的应用，看起来很可爱，不是吗？">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: | ------- | ------- | ---------- |
| size  | 图片大小 | `'small'  |  'medium'   | 'large' | 'huge'` | `'medium'` |
|  src  | 图片链接 | `string`  | `undefined` |
| round |   圆角   | `boolean` |   `false`   |
