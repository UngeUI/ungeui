<template>
  <div>
    <u-space>
      <u-button type="success" @click="open"> 开启 </u-button>
      <u-button type="danger" @click="close"> 关闭 </u-button>
    </u-space>
  </div>
</template>

<script setup>
import { loadingBar, UButton, USpace } from 'ungeui'
const open = () => {
  loadingBar.start()
}
const close = () => {
  loadingBar.end()
}
</script>
