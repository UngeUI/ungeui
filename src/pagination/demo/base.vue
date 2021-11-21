<template>
    <div>
        <u-pagination 
            v-model:current="current" 
            :total="100"
            @change="pageChange"
        ></u-pagination>
    </div>
</template>

<script setup>
import { UPagination,message } from 'ungeui'
import { ref } from 'vue'

let current = ref(4)
const pageChange = (num) => {
    message.info('当前页改变' + num)
}
</script>