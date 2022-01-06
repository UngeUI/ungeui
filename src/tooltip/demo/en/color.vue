<template>
   <div>
    <u-space>
        <u-tooltip placement="left" color="#f50">
            <template #title>
                #f50
            </template>
            <u-tag color="#f50">#f50</u-tag>
        </u-tooltip>
        <u-tooltip placement="top" color="#2db7f5">
            <template #title>
                #2db7f5
            </template>
            <u-tag color="#2db7f5">#2db7f5</u-tag>
        </u-tooltip>
        <u-tooltip placement="bottom" color="purple">
            <template #title>
                purple
            </template>
            <u-tag color="purple">purple</u-tag>
        </u-tooltip>
        <u-tooltip placement="top" color="#108ee9">
            <template #title>
                #108ee9
            </template>
            <u-tag color="#108ee9">#108ee9</u-tag>
        </u-tooltip>
        <u-tooltip placement="right" color="red">
            <template #title>
                red
            </template>
            <u-tag color="red">red</u-tag>
        </u-tooltip>
     </u-space>
   </div>
</template>

<script setup>
import { UTooltip, UTag,USpace } from 'ungeui'
</script>