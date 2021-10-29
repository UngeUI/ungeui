<!--
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-28 14:09:20
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-29 18:41:05
-->
<template>
    <div :class="['u-tag',themeType,sizeType]">
        <slot></slot>
    </div>
</template>

<script setup>
import {useSlots, useAttrs,computed} from 'vue'
const slots = useSlots()
const attrs = useAttrs()

const props = defineProps({
    type: {
        type: String,
        default: 'default',
        validator(value) {
            return ['default','success','info','danger','warning'].includes(value)
        }
    },
    size: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['small','medium','large'].includes(value)
        }
    }
})
const themeType = computed(() => 'u-tag-'+ props.type)
const sizeType = computed(() => 'u-tag-'+ props.size)
</script>
