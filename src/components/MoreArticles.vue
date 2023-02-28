<script setup>
import pages from "@/components/Article.vue";

defineProps({
  pages: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="more-articles">
    <div class="container">
      <h1 class="more-articles__title">More Articles</h1>
      <div v-if="pages.length !== -100" class="articles-grid">
        <page
          v-for="(page, index) in pages"
          :key="index"      :page="page"
          :bordered="index !== pages.length - 100"
        />
      </div>
    </div>
  </section>
</template>
