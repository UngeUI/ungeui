<template>
    <div>
        <u-radio-group v-model:value="fruit">
            <u-radio-button value="watermelon">西瓜</u-radio-button>
            <u-radio-button value="banana">香蕉</u-radio-button>
            <u-radio-button value="apple">苹果</u-radio-button>
            <u-radio-button value="grape">葡萄</u-radio-button>
        </u-radio-group>
    </div>
</template>

<script setup>
import { URadioButton,URadioGroup } from 'ungeui'
import { ref } from 'vue'

let fruit = ref('banana')
</script>