<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:04:21
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:08:14
-->
<template>
    <div>
        <u-button @click="open">Custom Icon</u-button>
        <u-dialog v-model:visible="visible">
            <template #default>
                You can customize the icon in the upper right corner
            </template>
            <template #icon>
                <u-icon :size="20">
                    <IconMove />
                </u-icon>
            </template>
        </u-dialog>
    </div>
</template>

<script setup>
import { UDialog,UIcon, UButton } from 'ungeui'
import { IconMove } from '@ungeui/icons'
import { ref } from 'vue'

let visible = ref(false)
const open = () => {
    visible.value = true
}
</script>