<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:00:37
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:01:25
-->
<template>
    <div>
        <u-checkbox v-model:checked="check">checkbox</u-checkbox>
    </div>
</template>

<script setup>
import { UCheckbox } from 'ungeui'
import { ref } from 'vue'

let check = ref(false)
</script>