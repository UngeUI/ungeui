<template>
   <div>
     <u-space>
          <u-tooltip placement="left">
               <template #title>
                    Hello
               </template>
               <u-button>Left</u-button>
          </u-tooltip>
          <u-tooltip placement="top">
               <template #title>
                    Hello
               </template>
               <u-button>Top</u-button>
          </u-tooltip>
          <u-tooltip placement="bottom">
               <template #title>
                    Hello
               </template>
               <u-button>Bottom</u-button>
          </u-tooltip>
          <u-tooltip placement="right">
               <template #title>
                    Hello
               </template>
               <u-button>Right</u-button>
          </u-tooltip>
     </u-space>
   </div>
</template>

<script setup>
import { UTooltip, UButton,USpace } from 'ungeui'
</script>