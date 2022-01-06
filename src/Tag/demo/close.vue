<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 14:18:00
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:33:04
-->
<template>
    <div>
        <u-space>
            <u-tag @close="handleClose" size="medium" closable>click to close</u-tag>
            <u-tag @close="handleClose" type="info" size="medium" closable>click to close</u-tag>
        </u-space>
    </div>
</template>

<script setup>
import { UTag,USpace } from 'ungeui';
const handleClose = () => {
    alert('close');
};
</script>
