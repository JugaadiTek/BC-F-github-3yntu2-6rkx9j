<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
// import Hero from '@/components/Hero.vue';
import Article from '@/components/Article.vue';

const hero = ref(null);
const articles = ref(null);

fetchData();

async function fetchData() {
  const response = await directus.items('home').readByQuery({
    fields: ['id','title','slug','status'],
  });
  const formattedArticles = response.data.map((article) => {
    return { ...article };
  });
  const [first, ...rest] = formattedArticles;
  hero.value = first;
  articles.value = rest;
}
</script>
<template>
  <main>
    <section class="main-content">
      <div class="container">
        <Hero v-if="hero" :article="hero" />
        <div v-if="articles" class="articles-grid">
          <Article
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
            :bordered="index !== articles.length - 1" />
        </div>
      </div>
    </section>
  </main>
</template>
