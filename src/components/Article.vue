<script setup>
import { RouterLink } from 'vue-router';
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
</script>
<template>
  <br>
  <RouterLink
    style="color:green; !important"
    :to="`/page/${page.slug}`">
    <span>      <b>      {{ page.title }}     </b>    {{ page.id }}    </span>
  </RouterLink>
</template>

