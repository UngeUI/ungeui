<template>
   <div>
        <u-button @click="onClick">
             this is loadingBar
        </u-button>
   </div>
</template>

<script setup>
import { ULoadingBar,UButton } from 'ungeui'
const onClick = () => {
     console.log(234)
     ULoadingBar.start()
     setTimeout(() => {
          ULoadingBar.end()
     },1000)
}
</script>