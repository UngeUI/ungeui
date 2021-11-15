---
map:
    path: /components/dialog
---

# Dialog

以弹窗的形式在同一个页面展示数据

```js
import { UDialog } from 'ungeui'
```

## 代码演示

### 普通弹窗

<demo src="./demo/base.vue"
  language="vue"
  title="基本用法"
  desc="弹窗基本用法">
</demo>

### 预置事件交互

<demo src="./demo/event.vue"
  language="vue"
  title="基本用法"
  desc="触发某些钩子">
</demo>

## Props

|  参数  |     说明     |   类型    |   默认值    |
| :----: | :----------: | :-------: | :---------: | 
| `visible` | 控制弹窗的显示 | `boolean` | `false` |
| `on-Confirm` | 点击弹窗确定 | `(e:MouseEvent) => void` | `false` |
| `on-Cancel` | 点击弹窗取消 | `(e:MouseEvent) => void` | `undefined` |
| `on-Close` | 点击弹窗关闭 | `(e:MouseEvent) => void` | `undefined` |