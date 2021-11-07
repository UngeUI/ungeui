## Unge UI

ungeUI 是一个 Vue3 组件库

## 安装

```shell
yarn add ungeui
```

## 全部引入

```js
import { createApp } from 'vue'
import UngeUI from 'ungeui'
import 'ungeui/style/index.css'

const app = createApp(App)
app.use(UngeUI)
```

## 按需加载

```js
import { createApp } from 'vue'
import { Button,Icon } from 'ungeui'
import 'ungeui/style/tag.styl'
import 'ungeui/style/icon.styl'

const app = createApp(App)
app.use(Button)
app.use(Icon)
```

