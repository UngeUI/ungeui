<template>
   <div>
        <u-slider v-model:value="value">
             this is slider
        </u-slider>
        {{value}}
   </div>
</template>

<script setup>
import { USlider } from 'ungeui'
import { ref } from 'vue'

let value = ref(20)
</script>