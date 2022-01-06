<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-06 17:19:26
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:42:39
-->
<template>
    <div>
        <u-input placeholder="content" size="large">
            <template #prefix>
                <u-icon :size="20">
                    <IconSearch />
                </u-icon>
            </template>
            <template #suffix>
                <u-icon :size="20">
                    <IconPlay />
                </u-icon>
            </template>
        </u-input>
    </div>
</template>

<script setup>
import { UButton, UIcon, UInput } from 'ungeui';
import { IconSearch, IconPlay } from '@ungeui/icons';
</script>
