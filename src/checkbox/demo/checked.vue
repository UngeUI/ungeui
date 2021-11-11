<template>
    <div>
        <u-checkbox v-model:checked="check">多选框</u-checkbox>
    </div>
</template>

<script setup>
import { UCheckbox } from 'ungeui'
import { ref } from 'vue'

let check = ref(false)
</script>