<template>
  <div>
    <u-input placeholder="内容" size="large">
        <template #prefix>
            <u-icon type="u-cup"></u-icon>
        </template>
        <template #suffix>
            <u-icon type="u-arrowforward"></u-icon>
        </template>
    </u-input>
  </div>
</template>

<script setup>
import { UInput,UIcon } from 'ungeui';
</script>
