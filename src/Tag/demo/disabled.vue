<template>
    <div>
        <u-tag @close="handleClose" type="success" disabled>被禁用啦</u-tag>
    </div>
</template>

<script setup>
import { UTag } from 'ungeui';
const handleClose = () => {
    alert('关闭');
};
</script>
