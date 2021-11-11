<template>
    <div>
        <u-checkbox-group v-model:value="hobby">
            <u-checkbox value="run">多选框</u-checkbox>
            <u-checkbox value="sing">多选框</u-checkbox>
            <u-checkbox value="football">多选框</u-checkbox>
        </u-checkbox-group>
    </div>
</template>

<script setup>
import { UCheckbox,UCheckboxGroup } from 'ungeui'
import { ref } from 'vue'

let hobby = ref(['run','football'])
</script>