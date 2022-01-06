<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 17:12:13
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:41:44
-->
<template>
    <div>
        <u-space vertical>
            <h4>Reactive: {{ value }}</h4>
            <u-input placeholder="大" size="large" v-model:value="value">大</u-input>
        </u-space>
    </div>
</template>

<script setup>
import { UInput, USpace } from 'ungeui';
import { ref } from 'vue';

let value = ref('Hello ungeui');
</script>
