<template>
    <div>
        <u-radio-group v-model:value="fruit1">
            <u-radio-button value="watermelon">西瓜</u-radio-button>
            <u-radio-button value="banana">香蕉</u-radio-button>
            <u-radio-button value="apple">苹果</u-radio-button>
            <u-radio-button value="grape">葡萄</u-radio-button>
        </u-radio-group>
        <u-divider></u-divider>
        <u-radio-group v-model:value="fruit2">
            <u-radio-button value="watermelon">西瓜</u-radio-button>
            <u-radio-button value="banana">香蕉</u-radio-button>
            <u-radio-button value="apple" disabled>苹果</u-radio-button>
            <u-radio-button value="grape" disabled>葡萄</u-radio-button>
        </u-radio-group>
        <u-divider></u-divider>
        <u-radio-group v-model:value="fruit3">
            <u-radio-button value="watermelon" disabled>西瓜</u-radio-button>
            <u-radio-button value="banana" disabled>香蕉</u-radio-button>
            <u-radio-button value="apple" disabled>苹果</u-radio-button>
            <u-radio-button value="grape" disabled>葡萄</u-radio-button>
        </u-radio-group>
    </div>
</template>

<script setup>
import { URadioButton,URadioGroup,UDivider } from 'ungeui'
import { ref } from 'vue'

let fruit1 = ref('banana')
let fruit2 = ref('watermelon')
let fruit3 = ref('banana')
</script>