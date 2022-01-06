<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:00:37
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:01:33
-->
<template>
    <div>
        <u-checkbox-group v-model:value="hobbies">
            <u-checkbox value="Vue">VueJs</u-checkbox>
            <u-checkbox value="React">ReactJs</u-checkbox>
            <u-checkbox value="Node">NodeJs</u-checkbox>
        </u-checkbox-group>
        <u-divider></u-divider>
        <u-tag v-if="hobbies.length">Values：{{hobbies.join(' ｜ ')}}</u-tag>
    </div>
</template>

<script setup>
import { UCheckbox,UCheckboxGroup,UTag,UDivider } from 'ungeui'
import { ref } from 'vue'

let hobbies = ref(['Vue','Node'])
</script>