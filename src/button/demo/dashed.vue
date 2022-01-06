<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 16:07:57
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:57:39
-->
<template>
    <div>
        <u-space>
            <u-button dashed>默认</u-button>
            <u-button dashed type="success">成功</u-button>
            <u-button dashed type="danger">危险</u-button>
            <u-button dashed type="warning">警告</u-button>
            <u-button dashed type="info">提示</u-button>
        </u-space>
    </div>
</template>

<script setup>
import { UButton,USpace } from 'ungeui';
</script>
