<template>
    <div>
        <u-button round size="small" type="info">
            <template #prefix>
                <u-icon>
                    <IconSettings />
                </u-icon>
            </template>
        </u-button>
        <u-button round type="danger">
            <template #prefix>
                <u-icon>
                    <IconSettings />
                </u-icon>
            </template>
        </u-button>
        <u-button round size="large">
            <template #prefix>
                <u-icon>
                    <IconSettings />
                </u-icon>
            </template>
        </u-button>
    </div>
</template>

<script setup>
import { UButton, UIcon } from 'ungeui';
import { IconSettings } from '@ungeui/icons';
</script>
