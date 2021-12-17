<script setup>
import { ref } from 'vue'

let data = ref([{
    title: 'parent 1',
    key: '0-0',
    children: [
		{
			title: 'parent 1-0',
			key: '0-0-0',
			disabled: true,
			children: [
				{ 
					title: 'leaf', 
					key: '0-0-0-0', 
					disableCheckbox: true 
				},
				{ 
					title: 'leaf', 
					key: '0-0-0-1' 
				},
			],
		},
		{
			title: 'parent 1-1',
			key: '0-0-1',
			children: [
				{ 
					key: '0-0-1-0', 
					title: 'title0010'
				}
			],
		},
	],
}])
</script>

<template>
  <u-tree :data="data">d</u-tree>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
