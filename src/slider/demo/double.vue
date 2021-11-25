<template>
   <div>
        <u-slider range v-model:value="value">
             this is slider
        </u-slider>
        {{value}}
   </div>
</template>

<script setup>
import { USlider } from 'ungeui'
import { ref } from 'vue'

let value = ref([35,60])
</script>