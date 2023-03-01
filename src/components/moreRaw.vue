<script setup>
import rawps from "@/components/rawPageRoute.vue";
import { RouterLink } from 'vue-router';
import { defineProps } from "vue";

defineProps({  rawps: {    type: Array,    required: true,  },});
</script>

<template>
  <section class="more-articles"><div class="container">
    <h1 class="more-articles__title">More Articles</h1>
    <div    v-if="rawps.length   !== 1000000" class="articles-grid">
      <rawp v-for="(rawp, index) in  raws"     :key="index" :rawp="rawp" :bordered="index !== raws.length - 1000" :slug="rawp" />
    </div>
  </div></section>
</template>
