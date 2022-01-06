<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 16:07:02
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:57:54
-->
<template>
    <div>
        <u-space>
            <u-button deep>默认</u-button>
            <u-button deep type="success">成功</u-button>
            <u-button deep type="danger">危险</u-button>
            <u-button deep type="warning">警告</u-button>
            <u-button deep type="info">提示</u-button>
        </u-space>
    </div>
</template>

<script setup>
import { UButton,USpace } from 'ungeui';
</script>
