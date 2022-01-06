<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 16:10:12
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:40:16
-->
<template>
    <div>
        <u-space>
            <u-button round type="info">
                <template #prefix>
                    <u-icon :size="20">
                        <IconZoomIn />
                    </u-icon>
                </template>
                Prefix
            </u-button>
            <u-button round size="large" type="info">
                Suffix
                <template #suffix>
                    <u-icon :size="20">
                        <IconZoomIn />
                    </u-icon>
                </template>
            </u-button>
        </u-space>       
    </div>
</template>

<script setup>
import { UButton, UIcon, USpace } from 'ungeui';
import { IconZoomIn } from '@ungeui/icons';
</script>
