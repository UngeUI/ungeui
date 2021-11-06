<template>
  <div>
    <p>
      <span>点击次数:</span>
      <span>{{ count }}</span>
    </p>
    <u-button @click="onClick">按钮</u-button>
  </div>
</template>

<script setup>
import { UButton } from 'ungeui';
import { ref } from 'vue';

const count = ref(0);
const onClick = () => {
  count.value++;
}

</script>
