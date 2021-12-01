<template>
    <div>
        <u-input-number v-model:value="height" :step="2"></u-input-number>
        <u-divider type="solid" :height="height"></u-divider>
    </div>
</template>

<script setup>
import { UDivider,UInputNumber } from 'ungeui';
import { ref } from 'vue'
let height = ref(5)
</script>
