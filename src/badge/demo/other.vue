<template>
   <div>
        <u-space :grap="30" align="end">
          <u-badge value="30" dot>
               <u-icon>
                   <IconBell />
               </u-icon>
          </u-badge>
          <u-badge value="30" dot>
               Text Message
          </u-badge>
          <u-badge value="5" >
               <u-button>Button</u-button>
          </u-badge>
        </u-space>
   </div>
               
</template>

<script setup>
import { UBadge, UAvatar, USpace, UButton, UIcon } from 'ungeui'
import { IconBell } from '@ungeui/icons'
</script>