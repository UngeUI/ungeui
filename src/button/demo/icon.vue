<template>
  <div>
    <u-button size="small" type="info">
      <template #prefix>
        <u-icon>
        <IconMessage />
        </u-icon>
      </template>
    </u-button>
    <u-button size="large" type="danger">
      <template #prefix>
        <u-icon>
        <IconBan />
        </u-icon>
      </template>
    </u-button>
    <u-button size="huge" type="success">
        <template #prefix>
        <u-icon>
        <IconDownload />
        </u-icon>
      </template>
    </u-button>
  </div>
</template>

<script setup>
import { UButton, UIcon } from 'ungeui';
import { IconMessage,IconBan,IconDownload } from '@ungeui/icons'
</script>
