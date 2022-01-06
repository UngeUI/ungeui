<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-11-26 16:23:13
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 22:26:25
-->
<template>
   <div>
     <u-space>
          <u-tooltip placement="left">
               <template #title>
                    万物
               </template>
               <u-button>左边</u-button>
          </u-tooltip>
          <u-tooltip placement="top">
               <template #title>
                    皆有裂痕
               </template>
               <u-button>上面</u-button>
          </u-tooltip>
          <u-tooltip placement="bottom">
               <template #title>
                    那是
               </template>
               <u-button>底部</u-button>
          </u-tooltip>
          <u-tooltip placement="right">
               <template #title>
                    光进来的地方
               </template>
               <u-button>右边</u-button>
          </u-tooltip>
     </u-space>
   </div>
</template>

<script setup>
import { UTooltip, UButton,USpace } from 'ungeui'
</script>