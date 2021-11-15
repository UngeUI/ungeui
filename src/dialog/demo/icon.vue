<template>
    <div>
        <u-button @click="open">自定义Icon</u-button>
        <u-dialog v-model:visible="visible">
            <template #default>
                可以自定义右上角的Icon
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