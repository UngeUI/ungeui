<template>
    <div>
        <u-switch v-model:checked="state"></u-switch>
    </div>
</template>

<script setup>
import { USwitch } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
</script>