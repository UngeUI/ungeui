<template>
    <div>
        <u-input placeholder="内容" size="large">
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
