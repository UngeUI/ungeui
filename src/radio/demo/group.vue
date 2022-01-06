<template>
    <div>
        <u-radio-group v-model:value="fruit">
            <u-radio value="watermelon">西瓜</u-radio>
            <u-radio value="banana">香蕉</u-radio>
            <u-radio value="apple">苹果</u-radio>
            <u-radio value="grape">葡萄</u-radio>
        </u-radio-group>
    </div>
</template>

<script setup>
import { URadio, URadioGroup } from 'ungeui';
import { ref } from 'vue';

let fruit = ref('banana');
</script>
