<template>
   <div>
        <u-space :gap="20">
            <u-badge :value="value" :max="99" :min="95">
                <u-avatar size="large"></u-avatar>
            </u-badge>
            <u-input-number 
                v-model:value="value"
            ></u-input-number>
        </u-space>
   </div>
               
</template>

<script setup>
import { UBadge, UAvatar, UInputNumber,USpace } from 'ungeui'
import { ref } from 'vue'

let value = ref(97)
let value2 = ref(3)
</script>