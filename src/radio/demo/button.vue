<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-09 11:55:11
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:46:26
-->
<template>
    <div>
        <u-radio-group v-model:value="fruit1">
            <u-radio-button value="watermelon">Watermelon</u-radio-button>
            <u-radio-button value="banana">Banana</u-radio-button>
            <u-radio-button value="apple">Apple</u-radio-button>
            <u-radio-button value="grape">Grape</u-radio-button>
        </u-radio-group>
        <u-divider></u-divider>
        <u-radio-group v-model:value="fruit2">
            <u-radio-button value="watermelon">Watermelon</u-radio-button>
            <u-radio-button value="banana">Banana</u-radio-button>
            <u-radio-button value="apple" disabled>Apple</u-radio-button>
            <u-radio-button value="grape" disabled>Grape</u-radio-button>
        </u-radio-group>
        <u-divider></u-divider>
        <u-radio-group v-model:value="fruit3">
            <u-radio-button value="watermelon" disabled>Watermelon</u-radio-button>
            <u-radio-button value="banana" disabled>Banana</u-radio-button>
            <u-radio-button value="apple" disabled>Apple</u-radio-button>
            <u-radio-button value="grape" disabled>Grape</u-radio-button>
        </u-radio-group>
    </div>
</template>

<script setup>
import { URadioButton, URadioGroup, UDivider } from 'ungeui';
import { ref } from 'vue';

let fruit1 = ref('banana');
let fruit2 = ref('watermelon');
let fruit3 = ref('banana');
</script>
