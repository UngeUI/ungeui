<template>
    <div>
        <u-button @click="open">自定义底部内容</u-button>
        <u-dialog v-model:visible="visible" title="基础弹窗">
            <template #default>
                this is dialog body
            </template>
            <template #footer>
                <u-button deep>确定</u-button>
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