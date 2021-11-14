<template>
    <div>
        <u-button type="success" @click="onClickSuccess">成功</u-button>
        <u-button type="danger" @click="onClickDanger">危险</u-button>
        <u-button type="info" @click="onClickInfo">提示</u-button>
        <u-button type="warning" @click="onClickWarning">警告</u-button>
    </div>
</template>

<script setup>
import { message,UButton } from 'ungeui'
const onClickSuccess = () => {
    console.log(message.success("这是一条成功信息"))
}
const onClickDanger = () => {
    console.log(message.danger("这是一条危险信息"))
}
const onClickInfo = () => {
    console.log(message.info("这是一条正常信息"))
}
const onClickWarning = () => {
    console.log(message.warning("这是一条警告信息"))
}
</script>