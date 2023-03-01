<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import { propsToAttrMap } from '@vue/shared';

defineProps({
  land:     {    type: Object,    required: true,  },
  key:      {    type: String,    required: true,  },
  bordered: {    type: Boolean,   required: true,  },
});
</script>
<template>
  {{ (key) }}
  <RouterLink style="color:red; !important" :to="`/land/${land.slug}`">
    <span><b> {{ land.title }} </b> {{ land.id }} </span>
  </RouterLink>
</template>
