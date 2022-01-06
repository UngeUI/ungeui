<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:16:44
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:18:19
-->
<template>
    <div>
        <u-select v-model:value="value" placeholder="choose please" :style="{width:'300px'}">
            <u-select-option label="Apple" value="苹果" />
            <u-select-option label="Banana" value="香蕉" />
            <u-select-option label="Pear" value="梨" />
            <u-select-option label="Watermelon" value="西瓜" />
        </u-select>
        {{value}}
    </div>
</template>

<script setup>
import { USelect,USelectOption } from 'ungeui'
import { ref } from 'vue'

let value = ref('Apple')
</script>