---
map:
    path: /components/input
---

# Input⌨️

通过输入框得到用户想传递的信息

## 代码演示

```js
import { UInput } from 'ungeui';
```

### 双向绑定🤝

<demo src="./demo/reactive.vue"
  language="vue"
  title="🤝基本用法"
  desc="绑定用户输入的值">
</demo>

### 不同大小🔥

<demo src="./demo/size.vue"
  language="vue"
  title="🔥基本用法"
  desc="size控制输入框的大小，提供了small、medium、large三个尺寸">
</demo>

### 密码框🙈

<demo src="./demo/password.vue"
  language="vue"
  title="🙈基本用法"
  desc="密码框用于隐藏输入的字符">
</demo>

### Icon 插槽🙌

<demo src="./demo/icon.vue"
  language="vue"
  title="🙌基本用法"
  desc="可以插入Icon更加语义化，告诉用户这里应该输入的类型">
</demo>

### Textarea📋️

<demo src="./demo/textarea.vue"
  language="vue"
  title="📋️基本用法"
  desc="支持以文本域的形式表现">
</demo>

### 自定义 rows/cols🥨

<demo src="./demo/rowscols.vue"
  language="vue"
  title="🥨基本用法"
  desc="自定义行数列数，和原生原来用法一样">
</demo>

### 禁用🚫

<demo src="./demo/disabled.vue"
  language="vue"
  title="🚫基本用法"
  desc="禁用后，用户不能输入任何内容">
</demo>

## Props

|   参数   |    说明    |   类型    |   默认值   |
| :------: | :--------: | :-------: | :--------: | ------------ | ---------- |
|   size   | 输入框大小 | `'small'  |  'medium'  | 'large'`     | `'medium'` |
|   type   | 输入框类型 |  `'text'  | 'textarea' | 'password' ` | `'text'`   |
|   rows   |    行数    | `number`  |    `4`     |
|   cols   |    列数    | `number`  |    `4`     |
| disabled |  是否禁用  | `boolean` |  `false`   |

## Slots

|  参数  |    说明    |   类型   |   默认值    |
| :----: | :--------: | :------: | :---------: |
| prefix | 输入框前缀 | `string` | `undefined` |
| suffix | 输入框后缀 | `string` | `undefined` |
