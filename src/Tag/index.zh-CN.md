<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-04 23:25:49
 * @LastEditors: peterroe
 * @LastEditTime: 2021-11-06 13:35:42
-->
---
map:
  # 映射到docs的路径
  path: /components/tag
---

# Button

这是一个简单的按钮。

## 代码演示

### 不同主题

<demo src="./demo/theme.vue"
  language="vue"
  title="基本用法"
  desc="">
</demo>

### 不同大小

<demo src="./demo/size.vue"
  language="vue"
  title="基本用法"
  desc="">
</demo>

## API

```ts
import { UTag } from 'ungeui';
```

## Props

| 参数  | 说明 |   类型 |         值 |
| ----- | ---: | -----: | ---------: |
| size  | 大小 | string | 例如'16px' |
| color | 颜色 | string |  例如'red' |
