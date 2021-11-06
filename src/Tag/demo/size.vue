<template>
  <div>
    <u-tag type="default" size="small">默认</u-tag>
    <u-tag type="success" size="medium">成功</u-tag>
    <u-tag type="warning" size="large">警告</u-tag>
    <u-tag type="danger" size="medium">危险</u-tag>
    <u-tag type="info" size="small">提示</u-tag>
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
