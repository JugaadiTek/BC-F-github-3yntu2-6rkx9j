<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { directus } from '@/services/directus';
import { getAssetURL } from '@/utils/get-asset-url';
import MoreArticles from '@/components/MoreArticles.vue';
// =========================  COMPONENTS  ==========================================================
import NavBar from "./components/MC/NavBar.vue";
import hero from "./components/MC/hero.vue";
import servicescard from "./components/MC/servicescard.vue";
import imageWithContentList from "./components/MC/imageWithContentLIst.vue";
import imgSlider from "./components/MC/imgSlider.vue";
import ContentPairsRepeater from "./components/MC/ContentPairsRepeater.vue";
import ctaHero from "./components/MC/ctaHero.vue";
import artcont from "./components/MC/artcont.vue";
import postfeed from "./components/MC/postfeed.vue";
import newsletter from "./components/MC/newsletter.vue";
import footerSlice from "./components/MC/footerSlice.vue";
// =================================================================================================

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
    <!-- <RouterLink to="/" class="current-article__backlink">          <IconBack class="icon" />          <span>Back to Articles</span>        </RouterLink> -->
    <!-- <img style="height:100px;overflow:hidden;" :src="getAssetURL(article.cover_image)" alt="" /> -->
    <!-- <div v-html="article.body" class="current-article__bodyContent">  </div>
          <MoreArticles v-if="moreArticles" :articles="moreArticles" /> -->
  </section>



  <!---============================================================================================================================================================================================================-->
  <!------------------------------------------------ Insert Here ---------------------------------------------------------------------------------------------------------------------------------------------------->
  <!---============================================================================================================================================================================================================-->

  <section v-for="(slice, index) in slices" :class="[slice.alt, slice.component]" :id="`section_` + index" :key="index">

    <div v-if="slice.component == 'hero'">
      <hero :herocont="slice.bricks" />
    </div>

    <div v-else-if="slice.component == 'imageWithContentList'">
      <imageWithContentList :contPairCont="slice.bricks" />
    </div>

    <div v-else-if="slice.component == 'ctaHero'">
      <ctaHero :ctaHeroCont="slice.bricks" />
    </div>

    <div v-else-if="slice.component == 'ContentPairsRepeater'">
      <ContentPairsRepeater :pairsRepeaterCont="slice.bricks" />
    </div>

    <div v-else-if="slice.component == 'imgSlider'">
      <imgSlider :sliderCont="slice.bricks" />
    </div>


    <div :class="container" v-else-if="slice.component == 'artcont'">
      <artcont :artcontent="slice.bricks" />
    </div>

    <div :class="container" v-else-if="slice.component == 'postfeed'">
      <postfeed :postsCont="slice.bricks" />
    </div>


    <div :class="container" v-else-if="slice.component == 'servicecard'">
      <servicescard :servicecardCont="slice.bricks" />
    </div>

    <div :class="container" v-else-if="slice.component == 'newsletter'">
      <newsletter />
    </div>
  </section>



  <!------------------------------------------------ END SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->


  <!---============================================================================================================================================================================================================-->
  <!------------------------------------------------ Q&A TESTING UTIL ----------------------------------------------------------------------------------------------------------------------------------------------->
  <!---============================================================================================================================================================================================================-->
  <div class="codeloop">
    <div>
      <h2>article string</h2>
      <hr>
      <div>
        <code>{{ JSON.stringify(article) }}</code>
      </div>
    </div>
  </div>
</template>


<style>
.codeloop>div {
  padding: 16px;
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



