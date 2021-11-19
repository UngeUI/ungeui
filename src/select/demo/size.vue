<template>
    <div>
        <u-select size="small" placeholder="选择字母" :style="{width:'150px'}">
            <u-select-option>A</u-select-option>
            <u-select-option>B</u-select-option>
        </u-select>
        <u-select size="medium" placeholder="选择字母" :style="{width:'150px'}">
            <u-select-option>A</u-select-option>
            <u-select-option>B</u-select-option>
        </u-select>
        <u-select size="large" placeholder="选择字母" :style="{width:'150px'}">
            <u-select-option>A</u-select-option>
            <u-select-option>B</u-select-option>
        </u-select>
    </div>
</template>

<script setup>
import { USelect,USelectOption } from 'ungeui'
</script>