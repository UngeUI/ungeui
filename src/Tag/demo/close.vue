<template>
    <div>
        <u-tag @close="handleClose" size="medium" closable>点击关闭</u-tag>
        <u-tag @close="handleClose" type="info" size="medium" closable
            >点击关闭</u-tag
        >
    </div>
</template>

<script setup>
import { UTag } from 'ungeui';
const handleClose = () => {
    alert('关闭');
};
</script>
