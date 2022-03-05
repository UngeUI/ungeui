<!--
 * @Descripttion:
 * @Author: peterroe
 * @Date: 2021-11-04 23:23:10
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-08 14:57:45
-->
<div align=center>
    <a href="https://peterroe.github.io/ungeui/">
        <img  src="https://img-blog.csdnimg.cn/4843e19340f1432d9f24de61e16b9bce.png">
    </a>
</div>

<p align="center">
  <a href="https://www.npmjs.org/package/ungeui">
      <img src="https://img.shields.io/npm/v/ungeui.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/ungeui/dist/ungeui.es.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/ungeui/dist/ungeui.es.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/ungeui/dist/style.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/ungeui/dist/style.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <br>
</p>

<p align="center">Unge - Means young in Danish</p>

## Introduce

-   🥉 A component library based on Vue3
-   🚀 Writen in `.jsx` | `.vue` && `stylus`

## Usage

**Install**

```shell
$ yarn add ungeui
```

**Import**

```js
import { createApp } from 'vue';
import UngeUI from 'ungeui';
import 'ungeui/dist/style.css';

const app = createApp(App);
app.use(UngeUI);
```

## Document

[document here!](https://ungeui.github.io/ungeui/)

## Local development

⚡Start project in local enviroment

```
$ git clone https://github.com/UngeUI/ungeui.git
$ yarn
$ yarn dev
```

**You can add components manually:**

1. 🖥️Develop your components in `src/xxx `, Don't forget to write the demo and markdown

2. 💄build stylus in `styles/xxx.stylus`, and reference it in the `styles/index.stylus`

3. ➕Import components to `src/index.ts`

4. 🔧Configure document path in `docs/.vitepress/config.js`

**Or Automatically:**

```
yarn create-component [component-name]
```

**😀Welcome pull request**
