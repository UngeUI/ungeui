<template>
    <div>
        <u-select v-model:value="value" placeholder="选择字母" :style="{width:'300px'}">
            <u-select-option label="苹果" value="Apple" />
            <u-select-option label="香蕉" value="Banana" />
            <u-select-option label="梨" value="Pear" />
            <u-select-option label="西瓜" value="Watermelon" />
        </u-select>
        {{value}}
    </div>
</template>

<script setup>
import { USelect,USelectOption } from 'ungeui'
import { ref } from 'vue'

let value = ref('Apple')
</script>