<template>
   <div>
        <u-space :gap="20" align="end">
          <u-badge value="3" color="#87d068">
               <u-avatar></u-avatar>
          </u-badge>
          <u-badge value="3" color="#f50">
               <u-avatar></u-avatar>
          </u-badge>
          <u-badge value="3" color="orange">
               <u-avatar></u-avatar>
          </u-badge>
        </u-space>
   </div>
               
</template>

<script setup>
import { UBadge, UAvatar, USpace } from 'ungeui'
</script>