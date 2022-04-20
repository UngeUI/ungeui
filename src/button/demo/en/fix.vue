<template>
  <div>
    <u-space>
      <u-button round type="info">
        <template #prefix>
          <u-icon :size="20">
            <IconZoomIn />
          </u-icon>
        </template>
        Prefix
      </u-button>
      <u-button round size="large" type="info">
        Suffix
        <template #suffix>
          <u-icon :size="20">
            <IconZoomIn />
          </u-icon>
        </template>
      </u-button>
    </u-space>
  </div>
</template>

<script setup>
import { UButton, UIcon, USpace } from 'ungeui'
import { IconZoomIn } from '@ungeui/icons'
</script>
