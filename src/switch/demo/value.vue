<template>
    <div>
        <u-switch checkedValue="yes" uncheckedValue="no" v-model:checked="value"></u-switch>
        <u-tag>{{value}}</u-tag>
    </div>
</template>

<script setup>
import { USwitch, UTag } from 'ungeui'
import { ref } from 'vue'

let value = ref('yes')
</script>