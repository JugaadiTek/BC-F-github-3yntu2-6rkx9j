<script setup>
import { propsToAttrMap } from '@vue/shared';
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
defineProps({
  rawp: {
    type: Object,
    required: true,
  },
  bordered: {
    type: Boolean,
    required: true,
  },
});
console.log(RouterLink);
console.log(propsToAttrMap);
// const rawp = route;
</script>
<template>
  <RouterLink
    style="color:blueviolet; !important"
    :to="`/rawp/${rawp.slug}`">
    <span>      <b>      {{ rawp.title }}     </b>    {{ rawp.id }}    </span>
  </RouterLink>
  
</template>
