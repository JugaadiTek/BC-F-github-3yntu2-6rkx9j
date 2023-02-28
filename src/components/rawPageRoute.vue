<script setup>
import { RouterLink } from 'vue-router';
const routes = [
  { path: '/rawp/:slug' }
]
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
</script>
<template>
  <RouterLink
    style="color:blueviolet; !important"
    :to="`/rawp/${rawp.slug}`">
    <span>      <b>      {{ rawp.title }}     </b>    {{ rawp.id }}    </span>
  </RouterLink>
</template>
