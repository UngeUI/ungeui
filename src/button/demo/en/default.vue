<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-04 23:33:18
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:39:43
-->
<template>
    <div>
        <p>
            <span>Number: </span>
            <span>{{ count }}</span>
        </p>
        <u-button @click="onClick">button</u-button>
    </div>
</template>

<script setup>
import { UButton } from 'ungeui';
import { ref } from 'vue';

const count = ref(0);
const onClick = () => {
    count.value++;
};
</script>
