<!--
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-29 11:56:02
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 20:36:41
-->
<script setup>
import { ref } from 'vue'
let str = ref('hallo')

const handleClose = () => {
    alert(3)
}
</script>

<template>
    <div class="main">
        <section>
            <h3>Tag</h3>
            <hr>
            <h6>主题类型</h6>
            <u-tag type="default">默认</u-tag>
            <u-tag type="success">成功</u-tag>
            <u-tag type="warning">警告</u-tag>
            <u-tag type="danger">危险</u-tag>
            <u-tag type="info">提示</u-tag>
            <h6>大小</h6>
            <u-tag type="default" size="small">默认</u-tag>
            <u-tag type="success" size="medium">成功</u-tag>
            <u-tag type="warning" size="large">警告</u-tag>
            <u-tag type="danger" size="medium">危险</u-tag>
            <u-tag type="info" size="small">提示</u-tag>
            <h6>可关闭</h6>
            <u-tag @close="handleClose" type="success" size="medium" closable>成功</u-tag>
            <h6>圆角</h6>
            <u-tag type="info" round>成功</u-tag>
            <h6>禁用</h6>
            <u-tag type="info" disabled>成功</u-tag>
            <h6>自定义颜色</h6>
            <u-tag type="info" color="#ff00ff">成功</u-tag>
        </section>
    </div>
</template>

<style lang="stylus" scoped>
.main {
    text-align center    
}
</style>