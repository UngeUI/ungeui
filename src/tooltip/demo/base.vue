<template>
   <div>
        
     <u-tooltip placement="top">
          <template #title>
               Hello
          </template>
          <u-button>在上面</u-button>
     </u-tooltip>
     <u-tooltip placement="left">
          <template #title>
               Hello
          </template>
          <u-button>在左边</u-button>
     </u-tooltip>
     <u-tooltip placement="right">
          <template #title>
               Hello
          </template>
          <u-button>在右边</u-button>
     </u-tooltip>
     <u-tooltip placement="bottom">
          <template #title>
               Hello
          </template>
          <u-button>在下面</u-button>
     </u-tooltip>
   </div>
</template>

<script setup>
import { UTooltip, UButton } from 'ungeui'
</script>