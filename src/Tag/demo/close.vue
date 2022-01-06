<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 14:18:00
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:49:28
-->
<template>
    <div>
        <u-space>
            <u-tag @close="handleClose" size="medium" closable>点击关闭</u-tag>
            <u-tag @close="handleClose" type="info" size="medium" closable>点击关闭</u-tag>
        </u-space>
    </div>
</template>

<script setup>
import { UTag,USpace } from 'ungeui';
const handleClose = () => {
    alert('close');
};
</script>
