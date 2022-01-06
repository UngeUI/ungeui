<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:04:21
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:08:37
-->
<template>
    <div>
        <u-button @click="open">Customize bottom content</u-button>
        <u-dialog v-model:visible="visible" title="Base dialog">
            <template #default>
                this is dialog body
            </template>
            <template #footer>
                <u-button deep>Determine</u-button>
            </template>
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