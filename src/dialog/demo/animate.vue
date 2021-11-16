<template>
    <div>
        
        <u-radio-group v-model:value="enterName">
            <u-radio-button value="bounceInDown">bounceInDown</u-radio-button>
            <u-radio-button value="rotateInDownLeft">rotateInDownLeft</u-radio-button>
            <u-radio-button value="flipInY">flipInY</u-radio-button>
        </u-radio-group>
        <u-divider></u-divider>
        <u-radio-group v-model:value="leaveName">
            <u-radio-button value="fadeOut">fadeOut</u-radio-button>
            <u-radio-button value="rotateOutDownLeft">rotateOutDownLeft</u-radio-button>
            <u-radio-button value="flipOutX">flipOutX</u-radio-button>
        </u-radio-group>
        <u-divider></u-divider>
        <u-button @click="open">不同过渡动画</u-button>
        <u-dialog 
            v-model:visible="visible"
            :enter-class="enterName"
            :leave-class="leaveName"
        >
            Content
        </u-dialog>
    </div>
</template>

<script setup>
import { UDivider,UDialog, UButton, URadioGroup, URadioButton } from 'ungeui'
import { ref } from 'vue'

let enterName = ref('rotateInDownLeft')
let leaveName = ref('rotateOutDownLeft')

let visible = ref(false)
const open = () => {
    visible.value = true
}
</script>