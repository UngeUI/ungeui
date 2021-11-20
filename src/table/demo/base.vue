<template>
    <div>
        <u-table :data="data" :column="column">

        </u-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UTable } from 'ungeui'

let data = ref([{
    name: 'peter',
    age: 20,
    sex: 'boy'
},{
    name: 'mike',
    age: 24,
    sex: 'girl'
},{
    name: 'june',
    age: 30,
    sex: 'man'
}])

let column = ref([
    {
        title: 'Name',
        key: 'name'
    },
    {
        title: 'Age',
        key: 'age'
    },
    {
        title: 'Sex',
        key: 'sex'
    }
])
</script>