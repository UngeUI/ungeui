<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-12-02 16:28:07
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:11:48
-->
<template>
   <div>
       <u-space>
            <u-button type="success" @click="open">
                开启
            </u-button>
            <u-button type="danger" @click="close">
                关闭
            </u-button>
        </u-space>
   </div>
</template>

<script setup>
import { loadingBar,UButton, USpace } from 'ungeui'
const open = () => {
    loadingBar.start()
}
const close = () => {
    loadingBar.end()
}
</script>