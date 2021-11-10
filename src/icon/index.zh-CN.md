---
map:
  # 映射到docs的路径
  path: /components/icon
---

# Icon

Icon以图形的形式表达含义

```js
import { UIcon } from 'ungeui';
```
:::tip
关于**图标资源**，我们采取了与组件库分离的形式，[您可以在此处](https://www.xicons.org/#/)选取你想要的图标，并引入你的项目中
:::

当然，我们预置了一些常用的Icon，并提供您安装
```shell
yarn add -D @ungeui/icons
```
导入Icon示例：
```js
import { IconClock } from @ungeui/icons
```

## 代码演示

### 图标大小

<demo src="./demo/size.vue"
  language="vue"
  title="基本用法"
  desc="不同图标大小">
</demo>

### 图标颜色

<demo src="./demo/color.vue"
  language="vue"
  title="基本用法"
  desc="方便切换不同颜色">
</demo>

### 图标

<demo src="./demo/iconDemo.vue"
  language="vue"
  title=""
  desc="">
</demo>

## Props

| 参数  | 说明 | 类型 | 默认值 |
| :-----: | :---: | :-----: | :---------: |
| size  | 自定义大小   | `number | string` | `30px` |
| color  | 自定义颜色   | `string` | `undefind` |
