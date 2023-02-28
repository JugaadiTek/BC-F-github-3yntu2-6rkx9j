<script setup>
import landers from "@/components/landerRoute.vue";
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
  landers: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="more-articles">
    <div class="container">
      <h1 class="more-articles__title">More Articles</h1>
      <div v-if="landers.length !== -10000" class="articles-grid">
        <land
          v-for="(lander, index) in landers"
          :key="index"      :lander="lander"
          :bordered="index !== landers.length - 10000" :slug="land"
        />
      </div>
    </div>
  </section>
</template>
