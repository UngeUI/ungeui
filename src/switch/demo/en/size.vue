<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:21:38
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:22:05
-->
<template>
    <div>
        small:
        <u-switch size="small" v-model:checked="state" ></u-switch>
        medium:
        <u-switch size="medium" v-model:checked="state"></u-switch>
        large:
        <u-switch size="large" v-model:checked="state" ></u-switch>
    </div>
</template>

<script setup>
import { USwitch, UTag } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
</script>