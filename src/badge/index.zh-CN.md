---
map:
   path: /components/badge
---

# Badge📢

用于描述组件状态，看见它，你会很焦虑并且想消除它

## 代码演示

```js
import { UBadge } from 'ungeui';
```

### 基本用法❗

<demo src="./demo/base.vue"
 language="vue"
 title="❗基本用法"
 desc="它和头像很搭，代表未读的消息">
</demo>

### 不同背景颜色🌈

<demo src="./demo/color.vue"
 language="vue"
 title="🌈基本用法"
 desc="可能你不止想要红色，那么可以切换不同背景颜色">
</demo>

### 上下限🚧

<demo src="./demo/over.vue"
 language="vue"
 title="🚧基本用法"
 desc="不想看到爆炸的消息，那么就设一个上限值吧">
</demo>

### 是否显示下限值⛔

<demo src="./demo/lower.vue"
 language="vue"
 title="⛔基本用法"
 desc="到达最小值时，显示下限值，还是隐藏？">
</demo>

### 点🔵🔴🟠🟢

<demo src="./demo/dot.vue"
 language="vue"
 title="🔵基本用法"
 desc="安静地提示你有新的消息产生">
</demo>

### 其他组合📁

<demo src="./demo/other.vue"
 language="vue"
 title="📁基本用法"
 desc="也可以放在其他地方使用">
</demo>

## Props

| 参数  |   说明   |   类型    |   默认值    |
| :---: | :------: | :-------: | :---------: |
| value | 显示的值 ｜ `number | string` | `undefined` |
| color | 背景颜色 ｜ `string` | `#FF4D4F` |
| max | 上限值 ｜ `number` | `undefined` |
| min | 下限值 ｜ `number` | `0` |
| hideLowerLimit | 到达下限值时候是否隐藏 ｜ `boolean` | `false` |
| dot | 是否以圆点显示 ｜ `boolean` | `false` |