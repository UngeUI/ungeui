---
map:
    path: /components/dialog
---

# Dialog

以弹窗的形式在同一个页面展示数据

```js
import { UDialog } from 'ungeui'
```

## 代码演示

### 普通弹窗

<demo src="./demo/base.vue"
  language="vue"
  title="基本用法"
  desc="弹窗基本用法">
</demo>

### 预置事件交互

<demo src="./demo/event.vue"
  language="vue"
  title="基本用法"
  desc="触发某些钩子">
</demo>

### 自定义底部内容

<demo src="./demo/slot.vue"
  language="vue"
  title="基本用法"
  desc="占用底部插槽后，预置的取消和确定的事件将会失效">
</demo>

### 自定义Icon类型

<demo src="./demo/icon.vue"
  language="vue"
  title="基本用法"
  desc="自定义关闭的Icon">
</demo>

### 过渡动画类别

除此之外，在过渡动画上我们希望给于用户更多的灵活性，这得益于[animate.css](https://www.dowebok.com/demo/2014/98/)

<demo src="./demo/animate.vue"
  language="vue"
  title="基本用法"
  desc="可以传入所有持续的类名作为配置">
</demo>





## Props

|  参数  |     说明     |   类型    |   默认值    |
| :----: | :----------: | :-------: | :---------: | 
| `visible` | 控制弹窗的显示 | `boolean` | `false` |
| `on-Confirm` | 点击弹窗确定 | `(e:MouseEvent) => void` | `false` |
| `on-Cancel` | 点击弹窗取消 | `(e:MouseEvent) => void` | `undefined` |
| `on-Close` | 点击弹窗关闭 | `(e:MouseEvent) => void` | `undefined` |
| `enter-name` | 弹窗进入的动画 | `来自animate.css` | `bounceIn` |
| `leave-name` | 弹窗离开时的动画 | `来自animate.css` | `bounceOut` |
| `width` | 为number时，单位为px | `string | number` | `512px` |

## slots

|  参数  |     说明     |   类型    |   默认值    |
| :----: | :----------: | :-------: | :---------: | 
| `default` | 默认插槽 | `any` | `undefined` |
| `footer` | 底部插槽 | `any` | `undefined` |
| `icon` | Icon插槽 | `any` | `undefined` |