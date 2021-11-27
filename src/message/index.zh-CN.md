---
map:
    path: /components/message
---

更好的提示用户

## 消息提示

```js
import { message } from 'ungeui'
```

### 基本用法

<demo 
    src="./demo/base.vue"
    language="vue"
    title="基本用法"
    desc="最简单的用法">
</demo>

### 自定义配置

<demo 
    src="./demo/config.vue"
    language="vue"
    title="基本用法"
    desc="最简单的用法">
</demo>

## APIs

快捷调用接口
* `message.success(text)`
* `message.danger(text)`
* `message.info(text)`
* `message.warning(text)`

config对象配置详细字段
* `message(config)`
* `message(config)`
* `message(config)`
* `message(config)`

#### config

|   类型     | 含义  | 默认值  |
| :-------:  | :-----: | :-----: |
| `duration` | 信息弹窗持续的时间 | `3000ms` |
| `icon`     | 自定义图标 | `<info>` |
| `maxCount` | 最大数量 | `Infinity` |