<!--
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-29 11:56:02
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 18:43:29
-->
<script setup>
import { ref } from 'vue'
let str = ref('hallo')
</script>

<template>
    <div class="main">
        <section>
            <h3>Tag</h3>
            <u-tag type="default" size="small">默认</u-tag>
            <u-tag type="success" size="medium">成功</u-tag>
            <u-tag type="warning" size="large">警告</u-tag>
            <u-tag type="danger" size="medium">危险</u-tag>
            <u-tag type="info" size="small">提示</u-tag>
        </section>
    </div>
</template>

<style lang="stylus" scoped>
.main {
    text-align center    
}
</style>