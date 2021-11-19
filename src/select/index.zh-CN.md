---
map:
    path: /components/select
---

# Select

开关

```js
import { USelect } from 'ungeui'
```

## 代码演示

### 基本用法

<demo src="./demo/base.vue"
    language="vue"
    title="基本用法"
    desc="最简单的用法">
</demo>

### 不同大小

<demo src="./demo/size.vue"
    language="vue"
    title="不同大小"
    desc="默认为medium">
</demo>

### option中同时显示Value值

<demo src="./demo/displayValue.vue"
    language="vue"
    title=""
    desc="同时显示Value值">
</demo>

## Props

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| placeholder | 默认内容  | `number | boolean | string` | "请选择" |
| value | 选择的值  | `number | boolean | string | object` | "请选择" |
| on-update:value | 值更新时执行的回调  | `(e: Event) => value` |  `undefined` |
| display | 在option中显示value  | `boolean` | `false` |