---
map:
    path: /components/switch
---

# Switch

开关

```js
import { USwitch } from 'ungeui
```

## 代码演示

## 基本用法

<demo src="./demo/base.vue"
    language="vue"
    title="基本用法"
    desc="最简单的用法">
</demo>

## 不同大小

<demo src="./demo/size.vue"
    language="vue"
    title=""
    desc="不同大小">
</demo>

## 自定义值

<demo src="./demo/value.vue"
    language="vue"
    title=""
    desc="定义选中值与非选中值">
</demo>

## Props

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| checked  | 是否选中 | `boolean` | `false` |
| size  | 开关大小 | `'small' | 'medium' | 'large'` | `'medium'` | 
| checkedValue | 选中的值 |  `boolean | string | number` | `true` |
| uncheckedValue | 选中的值 |  `boolean | string | number` | `false` |
| on-Change | 切换按钮触发的事件 |  `(e:MouseEvent) => void` | `undefined` |
