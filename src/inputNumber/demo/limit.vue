<template>
   <div>
          <u-input-number 
               v-model:value="value"
               :max="10"
               :min="5"
               style="width: 140px"
          ></u-input-number>
   </div>
</template>

<script setup>
import { UInputNumber } from 'ungeui'
import { ref } from 'vue'

let value = ref(8)
</script>