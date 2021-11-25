<template>
   <div>
        <u-slider v-model:value="value" :max="20" :min="5">
             this is slider
        </u-slider>
        {{value}}
   </div>
</template>

<script setup>
import { USlider } from 'ungeui'
import { ref } from 'vue'

let value = ref(10)
</script>