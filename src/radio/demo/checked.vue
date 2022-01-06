<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-07 15:11:14
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:44:33
-->
<template>
    <div>
        <u-radio v-model:checked="checked">Radio</u-radio>
        <u-button @click="toggle">Toggle</u-button>
    </div>
</template>

<script setup>
import { URadio, UButton } from 'ungeui';
import { ref } from 'vue';

const checked = ref(true);
const toggle = () => (checked.value = !checked.value);
</script>
