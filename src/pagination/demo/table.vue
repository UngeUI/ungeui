<template>
    <div>
        <u-table 
            :data="data[current]" 
            :column="column"
        ></u-table>
        <u-pagination 
            v-model:current="current" 
            :total="100"
        ></u-pagination>
    </div>
</template>

<script setup>
import { UTable, UPagination } from 'ungeui'
import { ref } from 'vue'
let current = ref(2)
let data = ref(new Array(10).fill().map(_ => new Array(4).fill().map(_ => {
    return {
        id: Math.random().toString(32).slice(2,6),
        sex: Math.random() > 0.5 ? 'girl':'boy',
        age: Math.floor(Math.random() * 50),
    }
})))

let column = [
    {
        title: 'Id',
        key: 'id'
    },
    {
        title: 'Age',
        key: 'age',
        align: 'center'
    },
    {
        title: 'Sex',
        key: 'sex',
        width: '500px'
    }
]

</script>
