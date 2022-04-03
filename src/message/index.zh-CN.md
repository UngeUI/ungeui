---
map:
  path: /components/message
---

# Message💨

使用 Message 能更好地提示用户

## 代码演示

```js
import { message } from 'ungeui'
```

### 不同主题 🚀

<demo 
    src="./demo/base.vue"
    language="vue"
    title="🚀基本用法"
    desc="预置了几种基本的主题，您可以在合适的时机调用它们">
</demo>

### 自定义配置 🗽

<demo 
    src="./demo/config.vue"
    language="vue"
    title="🗽基本用法"
    desc="您还可以自定义一些配置">
</demo>

## APIs

快捷调用接口

- `message.success(text)`
- `message.danger(text)`
- `message.info(text)`
- `message.warning(text)`

config 对象配置详细字段

- `message(config)`
- `message(config)`
- `message(config)`
- `message(config)`

#### config

|     类型     |        含义        |   默认值   |
| :----------: | :----------------: | :--------: |
|  `duration`  | 信息弹窗持续的时间 |  `3000ms`  |
|    `icon`    |     自定义图标     |  `<info>`  |
|  `maxCount`  |      最大数量      | `Infinity` |
|   `zIndex`   |      z 轴高度      |   `300`    |
| `initOffset` | 弹出基础 Y 轴偏移  |    `0`     |
