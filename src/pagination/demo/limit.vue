<template>
    <div>
        <u-pagination 
            v-model:current="current" 
            :total="200"
            :count="3"
        ></u-pagination>
    </div>
</template>

<script setup>
import { UPagination } from 'ungeui'
import { ref } from 'vue'

let current = ref(8)
</script>