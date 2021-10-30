<!--
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-30 11:08:34
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-30 11:33:06
-->
<template>
    <div :class="['u-avatar',size]">
        dfd
    </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
    size: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['small','medium','large'].includes(value)
        }
    }
})

const size = computed(() => 'u-avatar-size__' + props.size)
</script>