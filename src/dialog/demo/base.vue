<template>
    <div>
        <u-button @click="open">打开弹窗</u-button>
        <u-dialog v-model:visible="visible">
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