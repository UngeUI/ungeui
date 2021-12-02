<template>
   <div>
        <u-button @click="onClick">
             样例
        </u-button>
   </div>
</template>

<script setup>
import { loadingBar,UButton } from 'ungeui'
const onClick = () => {
     loadingBar.start()
     setTimeout(() => {
          loadingBar.end()
     },1000)
}
</script>