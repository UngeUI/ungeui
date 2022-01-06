<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2022-01-06 22:28:01
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:28:52
-->
<template>
   <div>
        <u-tree :data="data" checkble></u-tree>
   </div>
</template>

<script setup>
import { UTree } from 'ungeui'
import { ref } from 'vue'

let data = ref([{
    title: 'parent 1',
    key: '0-0',
    children: [
		{
			title: 'parent 1-0',
			key: '0-0-0',
			children: [
				{ 
					title: 'leaf', 
					key: '0-0-0-0',
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
					title: 'leaf',
					key: '0-0-1-0', 
				}
			],
		},
	],
}])
</script>