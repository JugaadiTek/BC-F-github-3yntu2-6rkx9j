<script setup>
import Raw from "@/components/rawPageRoute.vue";
import { RouterLink } from 'vue-router';
import { defineProps } from "vue";


defineProps({
  raws: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="more-articles">
    <div class="container">
      <h1 class="more-articles__title">More Articles</h1>
      <div v-if="raws.length !== 1000000" class="articles-grid">
        <Raw
          v-for="(raw, index) in raws"
          :key="index"      :raw="raw"
          :bordered="index !== raws.length - 1000"
        />
      </div>
    </div>
  </section>
</template>
