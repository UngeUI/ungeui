---
map:
  path: /components/message
---

# Message💨

Using message can better prompt users

## Code demonstration

```js
import { message } from 'ungeui'
```

### Basic usage🚀

<demo 
    src="./demo/en/base.vue"
    language="vue"
    title="🚀basic usage"
    desc="Several basic themes are preset, and you can call them at the right time">
</demo>

### Custom configuration🗽

<demo 
    src="./demo/en/config.vue"
    language="vue"
    title="🗽basic usage"
    desc="You can also customize some configurations">
</demo>

## APIs

Quick call interface

- `message.success(text)`
- `message.danger(text)`
- `message.info(text)`
- `message.warning(text)`

Config object configuration detail fields

- `message(config)`
- `message(config)`
- `message(config)`
- `message(config)`

#### config

|     Type     |            meaning             | default value |
| :----------: | :----------------------------: | :-----------: |
|  `duration`  | duration of information pop-up |   `3000ms`    |
|    `icon`    |          custom icon           |   `<info>`    |
|  `maxCount`  |        maximum quantity        |  `Infinity`   |
|   `zIndex`   |         z-axis height          |     `300`     |
| `initOffset` |   pop-up base Y-axis offset    |      `0`      |
