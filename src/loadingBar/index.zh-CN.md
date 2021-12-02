---
map:
   path: /components/loadingBar
---

# LoadingBar

这里是LoadingBar组件

```js
import { ULoadingBar } from 'ungeui';
```

## 代码演示

### 基本用法

<demo src="./demo/base.vue"
 language="vue"
 title="基本用法"
 desc="基本用法">
</demo>

### 自定义关闭时间


我们推荐一个应用只能有一个`loadingBar`实例，所以你导出的是一个对象，通过调用`start()`和`end()`开启和关闭。

同时这也意味着，你可以跨文件，跨页面对这个实例进行开启关闭操作

<demo src="./demo/end.vue"
 language="vue"
 title="基本用法"
 desc="自定义关闭时间">
</demo>

### 自定义颜色

你可能对颜色会有需求...

<demo src="./demo/color.vue"
 language="vue"
 title="基本用法"
 desc="基本用法">
</demo>

## APIs

* `start(config)`
* `end()`

#### config

|   类型     | 含义  | 默认值  |
| :-------:  | :-----: | :-----: |
| `color` | 加载条颜色 | `#13c2c2` |

