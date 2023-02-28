<script setup>
import { RouterLink } from 'vue-router';
const routes = [
  { path: '/rawp/:slug' }
]
defineProps({
  raw: {
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
    :to="`/rawp/${raw.slug}`">
    <span>      <b>      {{ raw.title }}     </b>    {{ raw.id }}    </span>
  </RouterLink>
</template>
