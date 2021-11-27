---
map:
    path: /components/message
---

Better prompt users

## Message prompt

```js
import { message } from 'ungeui'
```

### Basic usage

<demo 
    src="./demo/base.vue"
    language="vue"
    title="basic usage"
    desc="simplest usage">
</demo>

### Custom configuration

<demo 
    src="./demo/config.vue"
    language="vue"
    title="basic usage"
    desc="simplest usage">
</demo>

## APIs

Quick call interface
* `message.success(text)`
* `message.danger(text)`
* `message.info(text)`
* `message.warning(text)`

Config object configuration detail fields
* `message(config)`
* `message(config)`
* `message(config)`
* `message(config)`

#### config

|   Type     | meaning   |  default value|
| :-------:  | :-----: | :-----: |
| `duration` | duration of information pop-up | `3000ms` |
| `icon`     | custom icon | `<info>` |
| `maxCount` | maximum quantity | `Infinity` |