<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { directus } from '@/services/directus';
import { getAssetURL } from '@/utils/get-asset-url';
import MoreArticles from '@/components/MoreArticles.vue';
// =========================  COMPONENTS  ==========================================================
import hero from "@/components/MC/hero.vue";
import servicescard from "@/components/MC/servicescard.vue";
import imageWithContentList from "@/components/MC/imageWithContentLIst.vue";
import imgSlider from "@/components/MC/imgSlider.vue";
import ContentPairsRepeater from "@/components/MC/ContentPairsRepeater.vue";
import ctaHero from "@/components/MC/ctaHero.vue";
import artcont from "@/components/MC/artcont.vue";
import postfeed from "@/components/MC/postfeed.vue";
import newsletter from "@/components/MC/newsletter.vue";
// =================================================================================================

const router = useRouter();
const route = useRoute();
const article = ref(null);
const moreArticles = ref(null);
fetchData();

async function fetchData() {
  const { id } = route.params;

  let articleResponse;
  let bill;

  try {
    articleResponse = await directus.items('home').readOne(id, {
      fields: [
        '*.*.*'

      /* "author.avatar", "author.first_name", "author.last_name*/,
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
    // bill.value = article._rawValue.grab_a_slice;
    // console.log(article.value);
    // console.log(bill.value);
    // console.log("BILL",bill,"\nBILLEXP",bill.data,"\nBILLEXP2", )
    // for (let bill2 of bill) {
    //   let bill3 = bill2.nosql_datastore_id
    //   let bill4 = bill3.json_datastore
    // //   let bill5 = JSON.parse(bill4)
    // //   this.allPagesData += JSON.stringify(bill5)
    //   console.log("b2",bill2,"b3",bill3)
    //   //,"\nb4",bill4,"\nb5",bill5)
    // }







  } catch (err) {
    router.replace({ name: 'not-found', params: { catchAll: route.path } });
  }
}
// let (slices,index) in article.data {
//     console.log(slices);
// }
// let quotes = ;
</script>

<template>
  <section v-if="article">
    <h1 class="current-article__title">{{ article.title }}</h1>
    <!-- <RouterLink to="/" class="current-article__backlink">          <IconBack class="icon" />          <span>Back to Articles</span>        </RouterLink> -->
    <!-- <img style="height:100px;overflow:hidden;" :src="getAssetURL(article.cover_image)" alt="" /> -->
    <!-- <div v-html="article.body" class="current-article__bodyContent">  </div>
                                                      <MoreArticles v-if="moreArticles" :articles="moreArticles" /> -->

  </section>
  <!------------------------------------------------ NAV BAR ---------------------------------------------------------------------------------------------------------------------------------------------------->

  <!------------------------------------------------ NAV BAR END ---------------------------------------------------------------------------------------------------------------------------------------------------->
  <div v-for="a in article.grab_a_slice">
    <h1 >  </h1>

    {{ a.nosql_datastore_id.json_datastore }}
    <div :bbb="a.nosql_datastore_id.json_datastore">{{ bbb }}</div>
    <!-- <div :ccc="JSON.parse(bbb)"></div> -->
  </div>


  <!-- <div v-for=" (b,index) in a.nosql_datastore_id" :key="index" >
                                                      {{ b }}
                                                    </div> -->

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
      <h2>Article Raw</h2>
      <hr>
      <div>
        <code>ARTICLE: {{ JSON.stringify(article.grab_a_slice) }}</code>
        <!-- <code>{{ article.data }}</code> -->
      </div>
      <h2>article for each slice</h2>
      <hr>
      <div>
        <div v-for="slice in article.grab_a_slice" :dsjs="JSON.stringify(slice)">
            <!-- <code>{{ JSON.stringify(slice.nosql_datastore_id.json_datastore) }}</code> -->
            <!-- <h3>SLICE</h3> -->
            <div>
                <!-- <code>JSDATA:{{ JSON.stringify(slice.nosql_datastore_id.json_datastore) }}</code> -->
                <!-- <code>slicedata: {{ JSON.parse(slice.nosql_datastore_id.json_datastore) }}</code> -->
                <hr>
                <div v-for="jsdata in slice.nosql_datastore_id">
                    <h4>the data</h4>
                    <code>JS DATA: {{ jsdata }}</code>
                    <!-- <code>JS DATA: {{ JSON.stringify(jsdata) }}</code> -->

                    <hr>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
  <!------------------------------------------------ FOOTER START ---------------------------------------------------------------------------------------------------------------------------------------------------->

  <!------------------------------------------------ FOOTER END ---------------------------------------------------------------------------------------------------------------------------------------------------->

<style>
.codeloop h2 {
}
.codeloop {
    background-color: #aceace;
    padding:32px;
}
.codeloop code {
    max-height:200px;
    overflow:hidden;
    overflow-y:scroll;
    display:block;
  padding: 16px;
  background-color: #f5f5f5;
  padding: 1rem;
  margin: 0.25rem 0;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.5rem;
  font-family: monospace;
  color: #333;
  border:4px solid purple;
}
</style>



