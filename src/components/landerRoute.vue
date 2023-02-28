<script setup>
import { propsToAttrMap } from '@vue/shared';
import { RouterLink } from 'vue-router';
defineProps({
  lander: {
    type: Object,
    required: true,
  },
  slug : {
    type: String,
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
    :to="`/land/${lander.slug}`">
    <span>      <b>      {{ lander.title }}     </b>    {{ lander.id }}    </span>
  </RouterLink>
</template>
