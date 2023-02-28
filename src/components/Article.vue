<script setup>
import { propsToAttrMap } from '@vue/shared';
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

defineProps({
  page: {
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
  <br>
  <RouterLink
    style="color:green; !important"
    :to="`/page/${page.slug}`">
    <span>      <b>      {{ page.title }}     </b>    {{ page.id }}    </span>
  </RouterLink>
</template>

