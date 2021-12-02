<template>
   <div>
        <u-space :gap="30" align="end">
          <u-badge value="30">
               <u-avatar size="small"></u-avatar>
          </u-badge>
          <u-badge value="30">
               <u-avatar></u-avatar>
          </u-badge>
          <u-badge value="30">
               <u-avatar size="large"></u-avatar>
          </u-badge>
        </u-space>
   </div>
               
</template>

<script setup>
import { UBadge, UAvatar, USpace } from 'ungeui'
</script>