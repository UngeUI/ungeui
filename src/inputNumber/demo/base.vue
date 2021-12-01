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
     message.info('用户输入')
}
const onIncrease = () => {
     message.success('用户增加')
}
const onDecrease = () => {
     message.warning('用户减少')
}
</script>