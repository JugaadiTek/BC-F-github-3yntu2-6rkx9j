<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { directus } from '@/services/directus';
import { getAssetURL } from '@/utils/get-asset-url';
import MoreArticles from '@/components/MoreArticles.vue';

const router = useRouter();
const route = useRoute();
const article = ref(null);
const moreArticles = ref(null);

fetchData();

async function fetchData() {
  const { id } = route.params;
  
  let articleResponse;
  
  try {
    articleResponse = await directus.items('home').readOne(id, {
      fields: [
      '*.*' /* "author.avatar", "author.first_name", "author.last_name*/,
      ],
    });
    
    const formattedArticle = {
      ...articleResponse,
      // publish_date: formatRelativeTime(new Date(articleResponse.publish_date)),
    };
    
    const moreArticlesResponse = await directus.items('home').readByQuery({
      fields: ['*.*'],
      filter: {
        _and: [
        { id: { _neq: articleResponse.id } },
        { status: { _eq: 'published' } },
        ],
      },
      limit: 20,
    });
    const formattedMoreArticles = moreArticlesResponse.data.map(
    (moreArticle) => {
      return {
        ...moreArticle,
        // publish_date: formatRelativeTime(new Date(moreArticle.publish_date)),
      };
    }
    );
    
    article.value = formattedArticle;
    moreArticles.value = formattedMoreArticles;
  } catch (err) {
    router.replace({ name: 'not-found', params: { catchAll: route.path } });
  }
}
</script>

<template>
    <section v-if="article">
        <h1 class="current-article__title">{{ article.title }}</h1>
        <RouterLink to="/" class="current-article__backlink">          <IconBack class="icon" />          <span>Back to Articles</span>        </RouterLink>
        <img style="height:100px;overflow:hidden;" :src="getAssetURL(article.cover_image)" alt="" />
        <div v-html="article.body" class="current-article__bodyContent">  </div>
        <MoreArticles v-if="moreArticles" :articles="moreArticles" />
    </section>
  
    
      <div class="container">
        <div class = "inner-container">
<!--- Insert Here-->
        </div>
        </div>
        
<!--- QA --->
<div class = "codeloop">
    <div>
      <h2>article string</h2>
      <hr>
      <div>
        <code>{{JSON.stringify(article)}}</code>
      </div>  
    </div>
    </div>
</template>


<style>
.codeloop > div {
  padding:16px;
  background-color: #f5f5f5;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.5rem;
  font-family: monospace;
  color: #333;
  overflow: auto;
}

</style>



