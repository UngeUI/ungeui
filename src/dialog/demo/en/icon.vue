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
import { UDialog, UIcon, UButton } from 'ungeui'
import { IconMove } from '@ungeui/icons'
import { ref } from 'vue'

let visible = ref(false)
const open = () => {
  visible.value = true
}
</script>
