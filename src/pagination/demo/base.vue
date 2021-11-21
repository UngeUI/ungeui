<template>
    <div>
        <u-pagination v-model:current="current" :total="100"></u-pagination>
    </div>
</template>

<script setup>
import { UPagination } from 'ungeui'
import { ref } from 'vue'

let current = ref(4)
</script>