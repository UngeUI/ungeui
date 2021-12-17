<template>
   <div>
        <u-tree :data="data">
             this is tree
        </u-tree>
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