<template>
  <div>
    <u-radio-group v-model:value="fruit">
      <u-radio value="watermelon">Watermelon</u-radio>
      <u-radio value="banana">Banana</u-radio>
      <u-radio value="apple">Apple</u-radio>
      <u-radio value="grape">Grape</u-radio>
    </u-radio-group>
  </div>
</template>

<script setup>
import { URadio, URadioGroup } from 'ungeui'
import { ref } from 'vue'

let fruit = ref('banana')
</script>
