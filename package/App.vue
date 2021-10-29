<!--
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-29 11:56:02
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 12:55:47
-->
<script setup>
import { ref } from 'vue'
let str = ref('hallo')
</script>

<template>
    <div>
        <h3>Tag</h3>
        <u-tag></u-tag>
    </div>
</template>

<style lang="stylus" scoped>
    .red {
        font: 2px
    }
</style>