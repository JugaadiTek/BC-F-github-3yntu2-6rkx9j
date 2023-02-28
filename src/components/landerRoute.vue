<script setup>
import { propsToAttrMap } from '@vue/shared';
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
defineProps({
  land: {
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
</script>
<template>
  <RouterLink
    style="color:red; !important"
    :to="`/land/${land.slug}`">
    <span>      <b>      {{ land.title }}     </b>    {{ land.id }}    </span>
  </RouterLink>
</template>
