<template>
   <div>
        <u-space :gap="20">
            <u-badge :value="value">
                <u-avatar size="large"></u-avatar>
            </u-badge>
            <u-badge :value="value" :min="0" hideLowerLimit>
                <u-avatar size="large"></u-avatar>
            </u-badge>
            <u-badge :value="value" :min="0" dot>
                <u-avatar size="large"></u-avatar>
            </u-badge>
            <u-badge :value="value" :min="0" dot  hideLowerLimit>
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

let value = ref(3)
</script>