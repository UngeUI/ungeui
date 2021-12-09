---
map:
    path: /components/pagination
---

## 分页1️⃣2️⃣3️⃣4️⃣

分页用来配合其他组件

## 代码演示

```js
import { UPagination } from 'ungeui'
```

### 基本用法🚀

<demo 
    src="./demo/base.vue"
    language="vue"
    title="🚀基本用法"
    desc="最简单的用法">
</demo>

### 限制数量🚧

<demo 
    src="./demo/limit.vue"
    language="vue"
    title="🚧基本用法"
    desc="限制长度">
</demo>


## Props

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| current | 当前页数 | `number` | `0`
| total | 总页数 | `number` | `0`