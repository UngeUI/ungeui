<template>
    <div>
        <u-select size="small" placeholder="选择性别" :style="{width:'150px'}">
            <u-select-option label="男" value="boy" />
            <u-select-option label="女" value="girl" />
            <u-select-option label="未知" value="unknown" />
        </u-select> 
        <u-select size="medium" placeholder="选择身份" :style="{width:'150px'}">
            <u-select-option label="学生" value="student" />
            <u-select-option label="老师" value="teacher" />
        </u-select> 
        <u-select size="large" placeholder="选择能力" :style="{width:'150px'}">
            <u-select-option label="跑" value="run" />
            <u-select-option label="跳" value="jump" />
        </u-select>
    </div>
</template>

<script setup>
import { USelect,USelectOption } from 'ungeui'
</script>