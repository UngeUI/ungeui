<template>
  <div>
    <u-button round type="info">
      <template #prefix>
        <u-icon :size="20">
          <IconZoomIn />
        </u-icon>
      </template>
      前缀
    </u-button>
    <u-button round size="large" type="info">
      后缀
      <template #suffix>
        <u-icon :size="20">
          <IconZoomIn />
        </u-icon>
      </template>
    </u-button>
  </div>
</template>

<script setup>
import { UButton, UIcon } from 'ungeui';
import { IconZoomIn } from '@ungeui/icons'
</script>
