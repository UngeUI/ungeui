---
map:
   path: /components/loadingBar
---

# LoadingBar🥖

this is LoadingBar component

## Code demonstration

```js
import { ULoadingBar } from 'ungeui';
```

### Basic useage🚀

<demo src="./demo/base.vue"
 language="vue"
 title="🚀Basic useage"
 desc="for example: close it manually after 1000ms">
</demo>

### Custom closing time⏱

We recommend that an application can only have one instance of 'loadingbar'

So what you export is an object, which can be turned on and off by calling 'start()' and 'end()'.

<demo src="./demo/end.vue"
 language="vue"
 title="⏱Basic useage"
 desc="the elapsed time is the same regardless of the distance from the loadingbar to the end">
</demo>

### Custom color🌈

You may have a need for color...

<demo src="./demo/color.vue"
 language="vue"
 title="🌈Basic useage"
 desc="different colors have different purposes">
</demo>

## APIs

* `start(config)`
* `end()`

#### config

|Type | meaning | default value|
| :-------: | :-----: | :-----: |
|` color ` | color of loading bar | ` #13c2c2 `|