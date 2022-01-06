<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:04:21
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:06:08
-->
<template>
    <div>
        <u-button @click="open">Open dialog</u-button>
        <u-dialog v-model:visible="visible" title="Basic dialog">
            this is dialog
        </u-dialog>
    </div>
</template>

<script setup>
import { UDialog, UButton } from 'ungeui'
import { ref } from 'vue'

let visible = ref(false)
const open = () => {
    visible.value = true
}
</script>