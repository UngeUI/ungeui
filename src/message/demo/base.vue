<template>
    <div>
        <u-space>
            <u-button type="success" @click="onClickSuccess">成功</u-button>
            <u-button type="danger" @click="onClickDanger">危险</u-button>
            <u-button type="info" @click="onClickInfo">提示</u-button>
            <u-button type="warning" @click="onClickWarning">警告</u-button>
        </u-space>
    </div>
</template>

<script setup>
import { message,UButton,USpace } from 'ungeui'
const onClickSuccess = () => {
    message.success("这是一条成功信息")
}
const onClickDanger = () => {
    message.danger("这是一条危险信息")
}
const onClickInfo = () => {
    message.info("这是一条正常信息")
}
const onClickWarning = () => {
    message.warning("这是一条警告信息")
}
</script>