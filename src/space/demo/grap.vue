<template>
   <div>
        <u-input-number :step="20" v-model:value="value"></u-input-number>
        <u-space :grap="value">
            <u-button>按钮</u-button>
            <u-button>按钮</u-button>
            <u-button>按钮</u-button>
        </u-space>
   </div>
</template>

<script setup>
import { USpace,UButton,UInputNumber } from 'ungeui'
import { ref } from 'vue'

let value = ref(22)
</script>