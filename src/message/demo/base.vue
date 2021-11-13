<template>
    <div>
        <u-button @click="onClick">TE</u-button>
    </div>
</template>

<script setup>
import { message,UButton } from 'ungeui'
const onClick = () => {
    console.log(message.success("dfg"))
}
</script>