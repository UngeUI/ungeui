<template>
    <div>
        <u-table :data="data" :column="column"></u-table>
    </div>
</template>

<script setup>
import { UTable } from 'ungeui'

let data = [{
    name: 'peter',
    age: 20,
    sex: 'boy'
},{
    name: 'mike',
    age: 24,
    sex: 'girl'
},{
    name: 'june',
    sex: 'man',
    age: 30,
}]

let column = [
    {
        title: 'Name',
        key: 'name',
        width: '200px',
        fixed: 'left'
    },
    {
        title: 'Age',
        key: 'age',
        align: 'center',
        width: '800px'
    },
    {
        title: 'Sex',
        key: 'sex',
        fixed: 'right',
        width: '500px'
    }
]
</script>