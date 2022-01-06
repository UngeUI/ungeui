<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-12 19:05:07
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:21:51
-->
<template>
    <div>
        小:
        <u-switch size="small" v-model:checked="state" ></u-switch>
        中:
        <u-switch size="medium" v-model:checked="state"></u-switch>
        大:
        <u-switch size="large" v-model:checked="state" ></u-switch>
    </div>
</template>

<script setup>
import { USwitch, UTag } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
</script>