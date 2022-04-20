<template>
  <div>
    small:
    <u-switch size="small" v-model:checked="state"></u-switch>
    medium:
    <u-switch size="medium" v-model:checked="state"></u-switch>
    large:
    <u-switch size="large" v-model:checked="state"></u-switch>
  </div>
</template>

<script setup>
import { USwitch, UTag } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
</script>
