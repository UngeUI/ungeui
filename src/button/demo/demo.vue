<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-04 15:12:11
 * @LastEditors: peterroe
 * @LastEditTime: 2021-11-04 21:55:37
-->
<template>
  <div>
    <p>
      <span style="padding: 0 16px 0 4px; font-size: 14px; color: #777"
        >点击次数:</span
      >
      <span>{{ count }}</span>
    </p>
    <u-button @click="onClick">按钮</u-button>
  </div>
</template>

<script lang="ts">
import { UButton } from 'ungeui';
import { ref } from 'vue';

export default {
  components: {
    UButton,
  },
  setup() {
    const count = ref(0);
    function onClick() {
      count.value++;
    }

    return {
      count,
      onClick,
    };
  },
};
</script>
