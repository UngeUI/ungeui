---
map:
    path: /components/select
---

# Select🔽

选项过多的时候可以用它，保持页面整洁

## 代码演示

```js
import { USelect } from 'ungeui'
```

### 基本用法🌠

<demo src="./demo/base.vue"
    language="vue"
    title="🌠基本用法"
    desc="表面展示给用户label值，实际内部传递value值">
</demo>

### 不同大小🔥

<demo src="./demo/size.vue"
    language="vue"
    title="🔥基本用法"
    desc="提供了三种大小的下拉框，默认为medium">
</demo>

### 显示Value值😃😭😩

<demo src="./demo/displayValue.vue"
    language="vue"
    title="😃😭😩基本用法"
    desc="同时展示给用户Value值">
</demo>

## Props

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| placeholder | 默认内容  | `number | boolean | string` | "请选择" |
| value | 选择的值  | `number | boolean | string | object` | "请选择" |
| on-update:value | 值更新时执行的回调  | `(e: Event) => value` |  `undefined` |
| display | 在option中显示value  | `boolean` | `false` |