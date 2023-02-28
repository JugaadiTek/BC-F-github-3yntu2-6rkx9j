<script setup>
import { RouterLink } from 'vue-router';
defineProps({
  article: {
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
    :to="`/page/${article.slug}`">
    <span>      <b>      {{ article.title }}     </b>    {{ article.id }}    </span>
  </RouterLink>
</template>

