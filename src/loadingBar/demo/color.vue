<template>
   <div>
       <u-space>
            <u-Tag @click="onClick('#965874')" color="#965874">
                #965874
            </u-Tag>
            <u-Tag @click="onClick('#108ee9')" color="#108ee9">
                #108ee9
            </u-Tag>
            <u-Tag @click="onClick('red')" color="red">
                red
            </u-Tag>
        </u-space>
   </div>
</template>

<script setup>
import { loadingBar,UTag,USpace } from 'ungeui'
const onClick = (color) => {
    loadingBar.start({
        color
    })
    setTimeout(() => {
        loadingBar.end()
    },1000)
}
</script>