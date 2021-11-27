---
map:
    path: /components/pagination
---


## Pagination

```js
import { UPagination } from 'ungeui'
```

### Basic usage

<demo 
    src="./demo/base.vue"
    language="vue"
    title="basic usage"
    desc="simplest usage">
</demo>

### Limit quantity

<demo 
    src="./demo/limit.vue"
    language="vue"
    title="basic usage"
    desc="limit quantity">
</demo>


## Props

| Parameter | description | type | default value|
| :------: | :------: | :-------: | :-----: |
| current | current number of pages | `number` | `0`
| total | total pages | `number` | `0`