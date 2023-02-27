<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps({
  rawpage: {
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
    :to="`/rawpage/${rawpage.id}`">
    {{ rawpage.title }}
  </RouterLink>
</template>
