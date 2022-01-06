<template>
   <div>
        <u-input-number :step="20" v-model:value="value"></u-input-number>
        <u-divider></u-divider>
        <u-space :gap="value">
            <u-button>button</u-button>
            <u-button>button</u-button>
            <u-button>button</u-button>
        </u-space>
   </div>
</template>

<script setup>
import { USpace, UButton, UInputNumber, UDivider } from 'ungeui'
import { ref } from 'vue'

let value = ref(22)
</script>