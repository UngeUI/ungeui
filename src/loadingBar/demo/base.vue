<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-12-02 14:49:15
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:11:38
-->
<template>
	<div>
		<u-button @click="onClick">
			示例
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