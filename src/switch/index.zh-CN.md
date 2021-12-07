---
map:
    path: /components/switch
---

# Switch🌗

开关用来切换两种不同的状态

## 代码演示

```js
import { USwitch } from 'ungeui'
```

### 基本用法🖱️

<demo src="./demo/base.vue"
    language="vue"
    title="🖱️基本用法"
    desc="点击切换值，背景亮起的时候，代表true，否则为false">
</demo>

### 不同大小🔥

<demo src="./demo/size.vue"
    language="vue"
    title="🔥基本用法"
    desc="Switch也预置了几种的不同大小，以适应不同场景">
</demo>

### 自定义值🌈

<demo src="./demo/value.vue"
    language="vue"
    title="🌈基本用法"
    desc="定义选中值与非选中值">
</demo>

## Props

|   参数   |   说明   |   类型    | 默认值  |
| :------: | :------: | :-------: | :-----: |
| checked  | 是否选中 | `boolean` | `false` |
| size  | 开关大小 | `'small' | 'medium' | 'large'` | `'medium'` | 
| checkedValue | 选中的值 |  `boolean | string | number` | `true` |
| uncheckedValue | 未选中的值 |  `boolean | string | number` | `false` |
| on-Change | 切换按钮触发的事件 |  `(e:MouseEvent) => void` | `undefined` |
