<template>
    <div>
        <u-switch size="small" v-model:checked="state"></u-switch>
        <!-- <br> -->
        <u-switch size="medium" v-model:checked="state"></u-switch>
        <!-- <br> -->
        <u-switch size="large" v-model:checked="state"></u-switch>
    </div>
</template>

<script setup>
import { USwitch } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
</script>