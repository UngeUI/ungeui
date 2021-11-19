<template>
    <div>
        <u-select v-model:value="value" :style="{width:'200px'}">
            <u-select-option display label="😃" value="Happy" />
            <u-select-option display label="😭" value="Sad" />
            <u-select-option display label="😩" value="Tired" />
        </u-select>
        {{value}}
    </div>
</template>

<script setup>
import { USelect,USelectOption } from 'ungeui'
import { ref } from 'vue'

let value = ref('Apple')
</script>