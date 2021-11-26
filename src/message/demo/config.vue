<template>
    <div>
        <u-space>
            <u-button @click="onIcon">自定义Icon</u-button>
            <u-button @click="onDuration">自定义持续时间</u-button>
            <u-button @click="onMaxCount">限制最大数量</u-button>
        </u-space>
    </div>
</template>

<script setup>
import { message,UButton,USpace } from 'ungeui'
import { IconGithub } from '@ungeui/icons'
const onIcon = () => {
    message({
        text: "自定义不同的Icon",
        icon: IconGithub
    })
}
const onDuration = () => {
    message({
        text: "自定义持续时间",
        duration: 1000
    })
}
const onMaxCount = () => {
    message({
        text: "最大支持三个",
        icon: "danger",
        maxCount: 3
    })
}
</script>