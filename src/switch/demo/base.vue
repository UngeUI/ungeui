<template>
    <div>
        <u-switch v-model:checked="state"></u-switch>
        <u-tag>{{state}}</u-tag>
    </div>
</template>

<script setup>
import { USwitch, UTag } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
</script>