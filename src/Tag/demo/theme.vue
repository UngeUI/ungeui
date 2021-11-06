<template>
  <div>
    <u-tag>默认</u-tag>
    <u-tag type="success">成功</u-tag>
    <u-tag type="warning">警告</u-tag>
    <u-tag type="danger">危险</u-tag>
    <u-tag type="info">提示</u-tag>
  </div>
</template>

<script lang="ts">
import { UTag } from 'ungeui';

export default {
  components: {
    UTag,
  }
};
</script>
