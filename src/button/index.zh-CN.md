---
map:
  # 映射到docs的路径
  path: /components/button
---

# Button

这是一个简单的按钮。

## 代码演示

### 基本用法

<demo src="./demo/default.vue"
  language="vue"
  title="基本用法"
  desc="点击切换">
</demo>

### 深色

<demo src="./demo/deep.vue"
  language="vue"
  title="基本用法"
  desc="深色具有更强烈的视觉冲击">
</demo>

### 虚线

<demo src="./demo/dashed.vue"
  language="vue"
  title="基本用法"
  desc="支持虚线">
</demo>

### 大小

<demo src="./demo/size.vue"
  language="vue"
  title="基本用法"
  desc="不同按钮的大小">
</demo>

### 文本

<demo src="./demo/text.vue"
  language="vue"
  title="基本用法"
  desc="文本按钮">
</demo>

### 禁用

<demo src="./demo/disabled.vue"
  language="vue"
  title="基本用法"
  desc="深色具有更强烈的视觉冲击">
</demo>

### 图标按钮

<demo src="./demo/icon.vue"
  language="vue"
  title="基本用法"
  desc="图片按钮表达按钮意义">
</demo>

### 圆形

<demo src="./demo/round.vue"
  language="vue"
  title="基本用法"
  desc="圆形更加丝滑">
</demo>

### 前后缀

<demo src="./demo/fix.vue"
  language="vue"
  title="基本用法"
  desc="文字加图片意思明朗">
</demo>

## API

```ts
import { UButton } from 'ungeui';
```

## Props

| 参数  | 说明 |   类型 |         值 |
| :-----: | ---: | -----: | :---------: |
| type  | 按钮主题 | `'success' | 'danger' | 'warning' | 'info' | 'default'` | `'default'` |
| deep | 深色按钮 | `boolean` |  `false` |
| dashed | 虚线按钮 | `boolean` |  `false` |
| size | 按钮大小 | `'small' | 'medium' | 'large' | 'huge'` |  `meduim` |
| text | 文本按钮 | `boolean` |  `false` |
| disabled | 禁用按钮 | `boolean` |  `false` |
| icon | 图标类型 | `string` |  `undefined` |
| prefix | 前缀图标 |  `string` |  `undefined` |
| round | 圆形图标 |  `boolean` |  `false` |
| suffix | 后缀图标 |  `string` |  `undefined` |