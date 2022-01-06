<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:12:04
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:15:26
-->
<template>
    <div>
        <u-space>
            <u-button @click="onIcon">customize icon</u-button>
            <u-button @click="onDuration">customize duration time</u-button>
            <u-button @click="onMaxCount">limit maximum</u-button>
        </u-space>
    </div>
</template>

<script setup>
import { message,UButton,USpace } from 'ungeui'
import { IconGithub } from '@ungeui/icons'
const onIcon = () => {
    message({
        text: "customize different icons",
        icon: IconGithub
    })
}
const onDuration = () => {
    message({
        text: "customize different duration",
        duration: 1000
    })
}
const onMaxCount = () => {
    message({
        text: "supports up to three",
        icon: "danger",
        maxCount: 3
    })
}
</script>