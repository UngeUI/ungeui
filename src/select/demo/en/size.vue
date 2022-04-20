<template>
  <div>
    <u-space>
      <u-select size="small" placeholder="sex" :style="{ width: '150px' }">
        <u-select-option label="boy" value="boy" />
        <u-select-option label="girl" value="girl" />
        <u-select-option label="unknown" value="unknown" />
      </u-select>
      <u-select
        size="medium"
        placeholder="identity"
        :style="{ width: '150px' }"
      >
        <u-select-option label="student" value="student" />
        <u-select-option label="teacher" value="teacher" />
      </u-select>
      <u-select size="large" placeholder="ability" :style="{ width: '150px' }">
        <u-select-option label="run" value="run" />
        <u-select-option label="jump" value="jump" />
      </u-select>
    </u-space>
  </div>
</template>

<script setup>
import { USelect, USelectOption, USpace } from 'ungeui'
</script>
