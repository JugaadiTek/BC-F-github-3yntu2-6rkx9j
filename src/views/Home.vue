<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
// import Hero from '@/components/Hero.vue';
import Article from '@/components/Article.vue';
import rawpage from '@/components/rawPageRoute.vue';
import lander from '@/components/landerRoute.vue';

const hero        = ref(null);
const hero2       = ref(null);
const hero3       = ref(null);

const articles    = ref(null);
const landers     = ref(null);
const rawpages    = ref(null);
fetchData();

async function fetchData() {
  const response = await directus.items('home').readByQuery({
    fields: ['id','title','slug','status'],
  });
  const formattedArticles = response.data.map((article) => {
    return { ...article };
  });
  const response2 = await directus.items('rawpage').readByQuery({
    fields: ['id','title','slug','status'],
  });
  const formattedRawPage = response2.data.map((rawpage) => {
    return { ...rawpage };
  });
  const response3 = await directus.items('landers').readByQuery({
    fields: ['id','title','slug','status'],
  });
  const formattedLander = response3.data.map((lander) => {
    return { ...lander };
  });
  const [first, ...rest] = formattedArticles;
  hero.value = first;
  articles.value = rest;
  const [first2, ...rest2] = formattedRawPages;
  hero2.value = first2;
  rawpages.value = rest2;
  const [first3, ...rest3] = formattedLanders;
  hero3.value = first3;
  landers.value = rest3;
}
</script>
<template>
  <main class = "siteMap">
    <section class="main-content">
      <div class="container">
        <Hero v-if="hero"    :article = "hero" />
        <Hero v-if="hero2"   :rawpage = "hero2" />
        <Hero v-if="hero3"   :lander  = "hero3" />
        <div  v-if="articles" class   = "articles-grid" >
          <Article
            v-for     = "(article, index) in articles"
            :key      = "index"
            :article  = "article"
            :bordered = "index !== articles.length - 1" />
          <rawpage
            v-for     = "(rawp, index) in rawpage"
            :key      = "index"
            :rawpage  = "rawp"
            :bordered = "index !== rawpage.length - 1" />
          <lander
            v-for="(lander, index) in landers"
            :key      = "index"
            :lander   = "lander"
            :bordered ="index !== landers.length - 1" />
        </div>
      </div>
    </section>
  </main>
</template>
<style>
.siteMap a {
  background:var(--accent);
  padding:8px 8px;
  margin:4px;
  border-radius:4px;
  display:inline-block;
  box-shadow:0 0 3px 1px rgba(0,0,0,0.3);
  text-align: center;
}
.siteMap a >span {
  font-size:0.6em;
  line-height: 1em;
}
.siteMap a span, 
.siteMap a span > b {  text-decoration:underline;text-transform: capitalize;}
.siteMap a span > b {
  display:block;
  font-size:1.5em;
}
</style>