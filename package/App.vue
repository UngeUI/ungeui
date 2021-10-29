<!--
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-29 11:56:02
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 13:15:29
-->
<script setup>
import { ref } from 'vue'
let str = ref('hallo')
</script>

<template>
    <div class="main">
        <section>
            <h3>Tag</h3>
            <u-tag></u-tag>
        </section>
    </div>
</template>

<style lang="stylus" scoped>
.main {
    text-align center    
}
</style>