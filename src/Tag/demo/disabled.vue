<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 14:46:44
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:50:20
-->
<template>
    <div>
        <u-tag @close="handleClose" type="success" disabled>被禁用了！</u-tag>
    </div>
</template>

<script setup>
import { UTag } from 'ungeui'
</script>
