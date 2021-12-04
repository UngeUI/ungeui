---
map:
    path: /components/icon
---

# Icon

Icon expresses its meaning in graphic form

## Code demonstration

```js
import { UIcon } from 'ungeui';
```

## Icon resources

:::tip
For **icon resources**, we have adopted the form of separation from the component library，[you can here](https://www.xicons.org/#/)select the icon you want and introduce it into your project
:::

Of course, we preset some commonly used icons and provide you with installation

```shell
yarn add -D @ungeui/icons
```

Import icon example：

```js
import { IconClock } from @ungeui/icons
```

### Icon size🔥

<demo src="./demo/size.vue"
  language="vue"
  title="🔥basic usage"
  desc="different icon sizes">
</demo>

### Icon color🌈

<demo src="./demo/color.vue"
  language="vue"
  title="🌈basic usage"
  desc="方便切换不同颜色">
</demo>

### Icon example of @ungeui/icons👑

<demo src="./demo/iconDemo.vue"
  language="vue"
  title=""
  desc="">
</demo>

## Props

| Parameter | description | type | default value|
| :---: | :--------: | :------: | :--------: | ------ |
| size  | custom size | `number  |  string`   | `30px` |
| color | custom color | `string` | `undefind` |
