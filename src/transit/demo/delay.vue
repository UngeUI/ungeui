<template>
	<div>
		<u-space>
			<u-input v-model:value="number" style="width:200px"></u-input>
			<u-tag>
				<u-transit :duration="1000">
					{{number}}
				</u-transit>
			</u-tag>
		</u-space>
	</div>
</template>

<script setup>
import { UTransit, UInput, UTag, USpace } from 'ungeui'
import { ref } from 'vue'

let number = ref(300)
</script>