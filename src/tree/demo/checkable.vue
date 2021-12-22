<template>
   <div>
        <u-tree 
			:data="data" 
			checkable 
			v-model:checkedKeys="showData"
		>
             this is tree
        </u-tree>
		<u-space>
			<u-tag 
				v-for="(item,index) in showData" 
				:key="index"
				type="info"
			>
				{{item}}
			</u-tag>
		</u-space>
   </div>
</template>

<script setup>
import { UTree, UTag, USpace } from 'ungeui'
import { ref } from 'vue'

const showData = ref([])

// setInterval(() => {
// 	showData.value = Math.random()
// },200)

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