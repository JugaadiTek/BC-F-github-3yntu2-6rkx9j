<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps({
  lander: {
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
    style="color:red; !important"
    :to="`/lander/${lander.id}`">
    {{ lander.title }}
  </RouterLink>
</template>
