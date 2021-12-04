---
map:
    path: /components/icon
---

# Icon🐳

Icon 以图形的形式表达含义

## 代码演示

```js
import { UIcon } from 'ungeui';
```

## 图标资源

:::tip
关于**图标资源**，我们采取了与组件库分离的形式，[你可以在此处](https://www.xicons.org/#/)选取你想要的图标，并引入你的项目中
:::

当然，我们预置了一些常用的 Icon，并提供您安装

```shell
yarn add -D @ungeui/icons
```

导入 Icon 示例：

```js
import { IconClock } from @ungeui/icons
```

### 图标大小🔥

<demo src="./demo/size.vue"
  language="vue"
  title="🔥基本用法"
  desc="你可以自定义图标大小">
</demo>

### 图标颜色🌈

<demo src="./demo/color.vue"
  language="vue"
  title="🌈基本用法"
  desc="不同的颜色也可以代表不同的心情">
</demo>

###  @ungeui/icons图标示例👑

<demo src="./demo/iconDemo.vue"
  language="vue"
  title=""
  desc="">
</demo>

## Props

| 参数  |    说明    |   类型   |   默认值   |
| :---: | :--------: | :------: | :--------: | ------ |
| size  | 自定义大小 | `number  |  string`   | `30px` |
| color | 自定义颜色 | `string` | `undefind` |
