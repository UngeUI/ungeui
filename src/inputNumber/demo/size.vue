<template>
   <div>
        <u-input-number v-model:value="value" size="small" style="width: 140px"></u-input-number>
        <u-input-number v-model:value="value" size="medium" style="width: 160px"></u-input-number>
        <u-input-number v-model:value="value" size="large" style="width: 180px"></u-input-number>
   </div>
</template>

<script setup>
import { UInputNumber } from 'ungeui'
import { ref } from 'vue'

let value = ref(0)
</script>