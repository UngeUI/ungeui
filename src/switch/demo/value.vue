<template>
    <div>
        <u-space>
            <u-switch checkedValue="yes" uncheckedValue="no" v-model:checked="value"></u-switch>
            <u-tag>{{value}}</u-tag>
        </u-space>
    </div>
</template>

<script setup>
import { USwitch, UTag, USpace } from 'ungeui'
import { ref } from 'vue'

let value = ref('yes')
</script>