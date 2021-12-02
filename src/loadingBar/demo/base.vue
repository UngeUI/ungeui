<template>
   <div>
        <u-button @click="onClick">
             this is loadingBar
        </u-button>
   </div>
</template>

<script setup>
import { loadingBar,UButton } from 'ungeui'
const onClick = () => {
     console.log(234)
     loadingBar.start()
     loadingBar.start()
     loadingBar.start()
     setTimeout(() => {
          loadingBar.end()
     },1000)
}
</script>