<!--
 * @Descripttion: 
 * @Author: peterroe
 * @Date: 2021-12-01 20:46:54
 * @LastEditors: peterroe
 * @LastEditTime: 2022-01-06 21:56:04
-->
<template>
   <div>
        <u-space :gap="30" align="end">
          <u-badge value="30" dot>
               <u-icon>
                   <IconBell />
               </u-icon>
          </u-badge>
          <u-badge value="30" dot>
               Text Message
          </u-badge>
          <u-badge value="5" >
               <u-button>按钮</u-button>
          </u-badge>
        </u-space>
   </div>
               
</template>

<script setup>
import { UBadge, UAvatar, USpace, UButton, UIcon } from 'ungeui'
import { IconBell } from '@ungeui/icons'
</script>