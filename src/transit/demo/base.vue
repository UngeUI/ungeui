<template>
	<div>
		<u-transit>
			{{number}}
		</u-transit>
	</div>
</template>

<script setup>
import { UTransit } from 'ungeui'
import { ref } from 'vue'
let number = ref(100)
setInterval(() => {
	number.value = Math.floor(Math.random() * 1000)
},1000)
</script>