---
map:
    path: /components/table
---

# Table📈

表格用于直观对比展示大量的数据

## 代码演示

```js
import { UTable } from 'ungeui'
```

### 基本用法📑

<demo src="./demo/base.vue"
    language="vue"
    title="📑基本用法"
    desc="每一条信息占用一行">
</demo>

### 自定义列内容🌈

<demo src="./demo/render.vue"
    language="vue"
    title="🌈基本用法"
    desc="自定义列内容">
</demo>

### 左右固定📌

<demo src="./demo/fixed.vue"
    language="vue"
    title="📌基本用法"
    desc="固定某一列，保证用户一直能看到">
</demo>

## Table Props

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| data | 需要展示的数据 | `array` | `[]` |
| column | 需要展示的列 | `array<DataTableColumn>` | `[]` |

## DataTableColumn

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| title   | 列的 title 信息 | `String` | `undefined`|
| key   | 这一列的 key，不可重复 | `String | number` | `undefined`|
| width   | 这一列的 宽度 | `String ` | `undefined`|
| fixed   | 左右固定 | `left | right ` | `''`|
