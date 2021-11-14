<template>
    <div>
        <u-switch v-model:checked="state" @change="onChange"></u-switch>
    </div>
</template>

<script setup>
import { USwitch, message } from 'ungeui'
import { ref } from 'vue'

let state = ref(true)
const onChange = () => {
    message({
        text: state.value,
        icon: state.value ? 'success' : 'danger'
    })
}
</script>