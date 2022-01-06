<template>
    <div>
        <u-radio v-model:checked="checked">单选框</u-radio>
        <u-button @click="toggle">切换</u-button>
    </div>
</template>

<script setup>
import { URadio, UButton } from 'ungeui';
import { ref } from 'vue';

const checked = ref(true);
const toggle = () => (checked.value = !checked.value);
</script>
