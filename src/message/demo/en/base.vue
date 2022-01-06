<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:12:04
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:12:44
-->
<template>
    <div>
        <u-space>
            <u-button type="success" @click="onClickSuccess">Success</u-button>
            <u-button type="danger" @click="onClickDanger">Danger</u-button>
            <u-button type="info" @click="onClickInfo">Info</u-button>
            <u-button type="warning" @click="onClickWarning">Warning</u-button>
        </u-space>
    </div>
</template>

<script setup>
import { message,UButton,USpace } from 'ungeui'
const onClickSuccess = () => {
    message.success("this is a success message")
}
const onClickDanger = () => {
    message.danger("this is a danger message")
}
const onClickInfo = () => {
    message.info("this is a info message")
}
const onClickWarning = () => {
    message.warning("this is a warning message")
}
</script>