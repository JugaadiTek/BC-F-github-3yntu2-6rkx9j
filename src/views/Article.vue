<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';
import sliceLogic from '@/utils/sliceLogic.vue';

const router = useRouter();
const route = useRoute();
const article = ref(null);
const moreArticles = ref(null);
// let pageblocks = "";
fetchData();


// Directus API call to get the article data via the directus sdk using the id from the route params
async function fetchData() {
  const { id } = route.params;
  let articleResponse;
  try {
    articleResponse = await directus.items('home').readOne(id, {
      fields: ['grab_a_slice.nosql_datastore_id.json_datastore', 'id'],
    });
    const formattedArticle = { ...articleResponse, };
    
    const moreArticlesResponse = await directus.items('home').readByQuery({
      fields: ['id', 'title'],
      filter: {
        _and: [
        { id: { _eq: articleResponse.id } },
        { status: { _eq: 'archived' } },
        ],
      },
      limit: 20,
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
        return pageblocks
      }
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
  try { dataformat_1a = dataformat_1.nosql_datastore_id } catch (err) { console.log("df1a failed", err); dataformat_1a = false } finally { }
  try { dataformat_1b = dataformat_1a.json_datastore } catch (err) { console.log("df1b failed", err); dataformat_1b = false } finally { }
  try { dataformat_2 = unescape(dataformat_1b) } catch (err) { console.log("df2 failed", err); dataformat_2 = false } finally { }
  try { dataformat_3 = Object(JSON.parse(dataformat_2)) } catch (err) { console.log("df3 failed", err); dataformat_3 = false } finally { }
  try { dataformat_4 = Array(dataformat_3) } catch (err) { console.log("df4 failed", err); dataformat_4 = false } finally { }
  try { dataformat_5 = dataformat_4[0].component } catch (err) { console.log("CT failed", err); dataformat_5 = false } finally { }
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
//================================================================================================
//============function to convert object to array =================================================
let freshArray = []

function objectToArray(obj) {
  freshArray = [obj]
  console.log(freshArray,obj)
  return freshArray
}
//================================================================================================
//============function to remove first and last characters from string ===========================
function removeFirstLastChar(str) {
  str = str.slice(1, -1);
  return str
}
//================================================================================================
//============function to create a new object ====================================================
//================================================================================================
let newObj
function createNewObject(sliceobj) {
  sliceobj = {
    bump: [
    JSON.parse(sliceobj)
    ]
  }
  // sliceobj= sliceobj.bump[0]
  // ctype=obj.bump[0].component
  console.log(sliceobj.bump[0])
  return sliceobj.bump[0]
}

// get values from object
</script>       
<template>
  <!---============================================================================================================================================================================================================-->
  <!------------------------------------------------ MODOCOSM SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->
  <!---============================================================================================================================================================================================================-->
  
  <section v-for="(slice, index) in article.grab_a_slice" >
    <sliceLogic 
    :sliceType="createNewObject(slice.nosql_datastore_id.json_datastore).component" 
    :sliceData="createNewObject(slice.nosql_datastore_id.json_datastore)" 
    :pindex="index" />
  </section>



  <!-- <div :sliceobj="JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore))"> -->
      <!-- <section v-for="(slice, index) in article.grab_a_slice" >
          <pre class="title">{{ index }}-Output Raw
             {{ JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore)) }}</pre>
          <pre style ="background:#33333350;" class="title">{{ index }}-Output sliceobj: 
            {{ JSON.stringify(sliceobj) }}</pre>
        <div  v-if="sliceobj == 'hero'">
          <hero :herocont="sliceobj" />
        </div>
        <div  v-else-if="sliceobj !== 'servicecard'" :class="container">
          <servicescard :servicecardCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'imageWithContentList'">
          <imageWithContentList :contPairCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'ctaHero'">
          <ctaHero :ctaHeroCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'ContentPairsRepeater'">
          <ContentPairsRepeater :pairsRepeaterCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'imgSlider'">
          <imgSlider :sliderCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'artcont'"  :class="container">
          <artcont :artcontent="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'postfeed'" :class="container">
          <postfeed :postsCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'newsletter'" :class="container">
          <newsletter />
        </div> 
</section> -->
  
  
  
  
  <!------------------------------------------------ END SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->
</template>
<!------------------------------------------------ FOOTER START ---------------------------------------------------------------------------------------------------------------------------------------------------->

<!------------------------------------------------ FOOTER END ---------------------------------------------------------------------------------------------------------------------------------------------------->
