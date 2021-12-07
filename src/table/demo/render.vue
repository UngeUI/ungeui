<template>
    <div>
        <u-table :data="data" :column="column">
            <template #name="{text}">
                 {{text}} ++
            </template>
            <template #hobby="{text:hobbys}">
                <u-space>
                    <u-tag type="success" v-for="it in hobbys" :key="it">
                        {{it}}
                    </u-tag>
                </u-space>
            </template>
        </u-table>
    </div>
</template>

<script setup>
import { UTable, UTag, USpace } from 'ungeui'

let data = [{
    name: 'peter',
    age: 20,
    sex: 'boy',
    hobby: ['coding','sleep']
},{
    name: 'mike',
    age: 24,
    sex: 'girl',
    hobby: ['swiming']
},{
    name: 'june',
    sex: 'man',
    age: 30,
    hobby: ['run','basketball']
}]

let column = [
    {
        title: 'Name',
        key: 'name'
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
    },
    {
        title: 'hobby',
        key: 'hobby'
    }
]
</script>