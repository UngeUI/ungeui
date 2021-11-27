---
map:
    path: /components/table
---

# Table

table

```js
import { UTable } from 'ungeui'
```

## Code demonstration

### Basic usage

<demo src="./demo/base.vue"
    language="vue"
    title="basic usage"
    desc="simplest usage">
</demo>

### Custom column content

<demo src="./demo/render.vue"
    language="vue"
    title="basic usage"
    desc="custom column content">
</demo>

### Left and right fixation

<demo src="./demo/fixed.vue"
    language="vue"
    title="basic usage"
    desc="left and right fixation">
</demo>

## Table Props

| Parameter | description | type | default value|
| :------: | :------: | :-------: | :-----: |
| data | data to be displayed | `array` | `[]` |
| column | columns to be displayed | `array<DataTableColumn>` | `[]` |

## DataTableColumn

|  Parameter | description | type | default value|
| :------: | :------: | :-------: | :-----: |
| title   | information of title column | `String` | `undefined`|
| key   | the key in this column cannot be repeated | `String | number` | `undefined`|
| width   | the width of this column | `String ` | `undefined`|
| fixed   | fixed | `left | right ` | `''`|
