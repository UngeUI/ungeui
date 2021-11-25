<template>
   <div>
          <u-input-number 
               v-model:value="value"
               style="width: 140px"
          ></u-input-number>
   </div>
</template>

<script setup>
import { UInputNumber } from 'ungeui'
import { ref } from 'vue'

let value = ref(20)
</script>