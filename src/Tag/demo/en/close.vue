<template>
  <div>
    <u-space>
      <u-tag @close="handleClose" size="medium" closable>click to close</u-tag>
      <u-tag @close="handleClose" type="info" size="medium" closable
        >click to close</u-tag
      >
    </u-space>
  </div>
</template>

<script setup>
import { UTag, USpace } from 'ungeui'
const handleClose = () => {
  alert('close')
}
</script>
