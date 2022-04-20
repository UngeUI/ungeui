<template>
  <div>
    <u-button @click="open">Trigger OK and close events</u-button>
    <u-dialog
      v-model:visible="visible"
      @confirm="onConfirm"
      @cancel="onCancel"
      @close="onClose"
    >
      Let life be beautiful like summer flowers <br />
      And Death like autumn leaves <br /><br />
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
  message.success('confirm')
}
const onCancel = () => {
  message.info('cancel')
}
const onClose = () => {
  message.warning('close')
}
</script>
