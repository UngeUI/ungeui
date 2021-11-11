<template>
    <div>
        <h4>响应式：{{ value }}</h4>
        <u-input placeholder="大" size="large" v-model:value="value"
            >大</u-input
        >
    </div>
</template>

<script setup>
import { UInput } from 'ungeui';
import { ref } from 'vue';

let value = ref('Hello ungeui');
</script>
