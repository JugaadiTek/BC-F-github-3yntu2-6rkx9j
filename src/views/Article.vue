<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { directus } from '@/services/directus';
import { getAssetURL } from '@/utils/get-asset-url';
import { isDefined } from '@/vueuse/core'
// import error-boundary from '@/utils/error.vue';
// =========================  COMPONENTS  ==========================================================
import hero from "@/components/MC/hero.vue";
// import { ifError } from 'assert';

import { unescape } from 'querystring';
// import { isUndefined } from 'util';
//import servicescard from "@/components/MC/servicescard.vue";
//import imageWithContentList from "@/components/MC/imageWithContentLIst.vue";
//import imgSlider from "@/components/MC/imgSlider.vue";
//import ContentPairsRepeater from "@/components/MC/ContentPairsRepeater.vue";
//import ctaHero from "@/components/MC/ctaHero.vue";
//import artcont from "@/components/MC/artcont.vue";
//import postfeed from "@/components/MC/postfeed.vue";
//import newsletter from "@/components/MC/newsletter.vue";
// =================================================================================================



const router = useRouter();
const route = useRoute();
const article = ref(null);
const moreArticles = ref(null);
let pageblocks = "";
fetchData();


// Directus API call to get the article data via the directus sdk using the id from the route params
// This is the function that is called when the page is loaded. It is an async function that is
// awaiting the response from the directus API. It is then storing the response in the article
// variable.
async function fetchData() {
  const { id } = route.params;
  let articleResponse;
  try {
    articleResponse = await directus.items('home').readOne(id, {
      fields: ['grab_a_slice.nosql_datastore_id.json_datastore', 'id',],
    });
    const formattedArticle = { ...articleResponse, };
    
    const moreArticlesResponse = await directus.items('home').readByQuery({
      fields: ['id', 'title'],
      filter: {
        _and: [
          { home_id: { _eq: articleResponse.id } },
        ],
      },
      limit: 200,
    });
    
    const formattedMoreArticles = moreArticlesResponse.data.map(
    (moreArticle) => {
      return { ...moreArticle, };
    }
    );
    
    // article.value = flattenObj(formattedArticle);
    // moreArticles.value = flattenObj(formattedMoreArticles);
    article.value = formattedArticle;
    moreArticles.value = formattedMoreArticles;
    
    try {
      if (article.value.grab_a_slice > 0) {
        pageblocks = article
      }
      return item
    } catch (err) {
      console.log("Error: ", err)
      return "ERROR";
    } 
  } catch (err) {
    router.replace({ name: 'not-found', params: { catchAll: route.path } });
  }
}
//================================================================================================
//=========== Function to flatten the object passed to it. =======================================
//================================================================================================
// A function that takes an object and returns a flattened version of that object.
const flattenObj = (ob) => {                               // The object which contains the
  let result = {};                                       // final result
  for (const i in ob) {                                  // loop through the object "ob"
  // We check the type of the i using                // typeof() function and recursively                // call the function again
  if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
    const temp = flattenObj(ob[i]);
    for (const j in temp) {
      result[i + '.' + j] = temp[j];              // Store temp in result
    }
  }
  else { result[i] = ob[i]; } // Else store ob[i] in result directly 
}
console.log(result)
return result;
};

//================================================================================================
//========== FUNCTION TO PERFORM "ETL" ACTIONS ON THE DATA =======================================
//================================================================================================
function bullshitFixer(shitToFix) {
  let dataformat_1 = {}
  let dataformat_1a = {}
  let dataformat_1b = {}
  let dataformat_2 = {}
  let dataformat_3 = {}
  let dataformat_4 = {}
  let dataformat_5 = {}
  try { dataformat_1 = shitToFix } catch (err) { console.log("df1 failed", err); dataformat_1 = false } finally { }
  try { dataformat_1a = ifError(dataformat_1.nosql_datastore_id) } catch (err) { console.log("df1a failed", err); dataformat_1a = false } finally { }
  try { dataformat_1b = ifError(dataformat_1a.json_datastorea) } catch (err) { console.log("df1b failed", err); dataformat_1b = false } finally { }
  try { dataformat_2 = unescape(dataformat_1b) } catch (err) { console.log("df2 failed", err); dataformat_2 = false } finally { }
  try { dataformat_3 = Object(JSON.parse(dataformat_2)) } catch (err) { console.log("df3 failed", err); dataformat_3 = false } finally { }
  try { dataformat_4 = Array(dataformat_3) } catch (err) { console.log("df4 failed", err); dataformat_4 = false } finally { }
  try { dataformat_5 = ifError(dataformat_4, [0].component) } catch (err) { console.log("CT failed", err); dataformat_5 = false } finally { }
  let fixedShit = {
    "F1": dataformat_1,
    "F1a": dataformat_1a,
    "F1b": dataformat_1b,
    "F2": dataformat_2,
    "F3": dataformat_3,
    "F4": dataformat_4,
    "SliceType": dataformat_5
  }

  console.log("===============================================================\n=========================", dataformat_5, "=========================\n===============================================================\n", fixedShit, "\n===============================================================");
  return fixedShit;
}
//================================================================================================
//========== FUNCTION TO CHECK FOR ERRORS IN THE DATA ============================================
//================================================================================================
function ifError(item) {
  console.log("starting ifError")
  try {
    console.log("trying to return item")
    return item
  } catch (err) {
    console.log("Error: ", err)
    return "ERROR";
  } 
}
</script>      
<template>
  <!---============================================================================================================================================================================================================-->
  <!------------------------------------------------ MODOCOSM SLICE MASTER ------------------------------------------------------------------------------------------------------------------------------------------>
  <!---============================================================================================================================================================================================================-->
  {{ JSON.stringify(pageblocks) }}
  <section v-for="(slice, index) in pageblocks" :class="[slice.alt, slice.component]" :id="`section_` + index" :key="index">
    <div class ="codecont">
      <div class = "codeloop">
        <div>
          <code>
            {{ JSONslice }}
          </code>
        </div>
      </div>
    </div>
  </section>
  <!-- <div v-if="ifError(bullshitFixer(slice).SliceType) == 'hero'">
    <hero :herocont="bullshitFixer(slice)[0].F4" />
  </div>              
  <div :class="container" v-else-if="slice.component !== 'servicecard'">
    <servicescard :servicecardCont="(JSON.stringify(bullshitFixer(slice)).F4[1].bricks)" />
  </div>
  <div v-else-if="slice.component == 'imageWithContentList'">
    <imageWithContentList :contPairCont="(bullshitFixer(slice)).F4[2].bricks" />
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
  <div :class="container" v-else-if="slice.component == 'newsletter'">
    <newsletter />
  </div> -->
  
  
  <!------------------------------------------------ END SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->
</template>
                <!------------------------------------------------ FOOTER START ---------------------------------------------------------------------------------------------------------------------------------------------------->
                
                <!------------------------------------------------ FOOTER END ---------------------------------------------------------------------------------------------------------------------------------------------------->
<style scoped></style>