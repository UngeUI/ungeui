<template>
   <div>
          <u-input-number 
               v-model:value="value"
               @change="onChange"
               @increase="onIncrease"
               @decrease="onDecrease"
          ></u-input-number>
   </div>
</template>

<script setup>
import { UInputNumber, message } from 'ungeui'
import { ref } from 'vue'

let value = ref(20)
const onChange = () => {
     message.info('Input')
}
const onIncrease = () => {
     message.success('Digital increase')
}
const onDecrease = () => {
     message.warning('Digital decrease')
}
</script>