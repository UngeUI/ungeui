<template>
    <div>
        <u-switch size="small" v-model:checked="state" @change="stateChange"></u-switch>
        <!-- <br> -->
        <u-switch size="medium" v-model:checked="state" @change="stateChange"></u-switch>
        <!-- <br> -->
        <u-switch size="large" v-model:checked="state" @change="stateChange"></u-switch>
        <u-tag>{{count}}</u-tag>
    </div>
</template>

<script setup>
import { USwitch, UTag } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
let count = ref(1)
const stateChange = () => {
    count.value ++
}
</script>