<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 16:08:57
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:58:53
-->
<template>
    <div>
        <u-space>   
            <u-button disabled type="warning">警告</u-button>
            <u-button disabled text type="warning">警告</u-button>
            <u-button disabled dashed type="warning">警告</u-button>
            <u-button disabled deep type="warning">警告</u-button>
        </u-space>     
    </div>
</template>

<script setup>
import { UButton, USpace } from 'ungeui';
</script>
