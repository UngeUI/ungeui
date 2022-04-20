<template>
  <div>
    <u-tag @close="handleClose" type="success" disabled>被禁用了！</u-tag>
  </div>
</template>

<script setup>
import { UTag } from 'ungeui'
</script>
