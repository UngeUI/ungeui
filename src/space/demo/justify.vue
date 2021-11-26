<template>
   <div>
       <u-radio-group v-model:value="state">
           <u-radio-button value="start">start</u-radio-button>
           <u-radio-button value="end">end</u-radio-button>
           <u-radio-button value="space-between">space-between</u-radio-button>
           <u-radio-button value="space-around">space-around</u-radio-button>
           <u-radio-button value="space-evenly">space-evenly</u-radio-button>
           <u-radio-button value="center">center</u-radio-button>
       </u-radio-group>
       <u-divider></u-divider>
        <u-space :justify="state">
             <u-tag type="success">success</u-tag>
             <u-tag type="info">info</u-tag>
             <u-tag type="danger">danger</u-tag>
             <u-tag type="warning">warning</u-tag>
        </u-space>
   </div>
</template>

<script setup>
import { UDivider,USpace,UTag,URadioGroup,URadioButton } from 'ungeui'
import { ref } from 'vue'

let state = ref('start')
</script>