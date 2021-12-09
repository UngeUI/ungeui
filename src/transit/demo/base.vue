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
let number = ref(300)
setInterval(() => {
	number.value = number.value + 66
},1000)
</script>