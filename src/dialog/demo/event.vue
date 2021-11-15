<template>
    <div>
        <u-button @click="open">触发确定和关闭事件</u-button>
        <u-dialog 
            v-model:visible="visible"
            @confirm="onConfirm"
            @cancel="onCancel"
            @close="onClose"
        >
            Let life be beautiful like summer flowers <br>
            And Death like autumn leaves <br><br>
            使生如夏花之绚烂，死如秋叶之静美
        </u-dialog>
    </div>
</template>

<script setup>
import { UDialog, UButton, message } from 'ungeui'
import { ref } from 'vue'

let visible = ref(false)
const open = () => {
    visible.value = true
}
const onConfirm = () => {
    message.success('用户点击确认')
}
const onCancel = () => {
    message.info('用户点击取消')
}
const onClose = () => {
    message.warning('用户点击关闭')
}
</script>