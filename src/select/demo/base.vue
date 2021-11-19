<template>
    <div>
        <u-select v-model:value="value" placeholder="选择字母" :style="{width:'300px'}">
            <u-select-option value="Apple">苹果</u-select-option>
            <u-select-option value="Banana">香蕉</u-select-option>
            <u-select-option value="Pear">梨</u-select-option>
            <u-select-option value="Watermelon">西瓜</u-select-option>
        </u-select>
        {{value}}
    </div>
</template>

<script setup>
import { USelect,USelectOption } from 'ungeui'
import { ref } from 'vue'

let value = ref('Apple')
</script>