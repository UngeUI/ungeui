<template>
  <div>
    小:
    <u-switch size="small" v-model:checked="state"></u-switch>
    中:
    <u-switch size="medium" v-model:checked="state"></u-switch>
    大:
    <u-switch size="large" v-model:checked="state"></u-switch>
  </div>
</template>

<script setup>
import { USwitch, UTag } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
</script>
