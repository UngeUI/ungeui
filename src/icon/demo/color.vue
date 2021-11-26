<template>
    <div>
        <u-space>
            <u-icon color="red" :size="30">
                <IconClock />
            </u-icon>
            <u-icon color="#987654" :size="30">
                <IconClock />
            </u-icon>
            <u-icon color="rgb(55,45,78)" :size="30">
                <IconClock />
            </u-icon>
        </u-space>
    </div>
</template>

<script setup>
import { UIcon, USpace } from 'ungeui';
import { IconClock } from 'ungeicons';
</script>
