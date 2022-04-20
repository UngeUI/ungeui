<template>
  <div>
    <u-space vertical>
      <h4>Reactive: {{ value }}</h4>
      <u-input placeholder="大" size="large" v-model:value="value">大</u-input>
    </u-space>
  </div>
</template>

<script setup>
import { UInput, USpace } from 'ungeui'
import { ref } from 'vue'

let value = ref('Hello ungeui')
</script>
