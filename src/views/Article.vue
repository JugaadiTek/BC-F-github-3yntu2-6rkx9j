<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';
import sliceLogic from '@/utils/sliceLogic.vue';
// import QueryString from 'qs';
// =========================importing components==================================================
const router = useRouter();
const route = useRoute();
const article = ref(null);
const moreArticles = ref(null);
// let pageblocks = "";
//---prepping data---------------------------------------------------------------------------
fetchData();
var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// Directus API call to get the article data via the directus sdk using the id from the route params
async function fetchData() {
  // const { id } = route.params;
  let articleResponse;
  try {
    articleResponse = await directus.items('home_nosql_datastore').readByQuery({
      fields: ['sort,nosql_datastore_id,nosql_datastore_id.Slice_Type,id,nosql_datastore_id.short_title,nosql_datastore_id.json_datastore' ],
      filter: {
        _and: [
          { home_id: { _eq: route.params.id } },
          { id: { _gt:0 }},
        ],
      },
      sort: ['sort'],
    });

    const formattedArticle = { ...articleResponse, }
    article.value = formattedArticle;

  } catch (err) {
    router.replace({ name: 'not-found', params: { catchAll: route.path } });
  }
}
//================================================================================================
//============function to create a new object ====================================================
//================================================================================================
let newobj = {}
function createNewObject(sliceobj) {
  // console.log(sliceobj)
  newobj = {
    bump: [
    JSON.parse(sliceobj)
    ]
  }
  // sliceobj= sliceobj.bump[0]
  // ctype=obj.bump[0].component
  console.log(newobj.bump[0])
  return newobj.bump[0]
}


var i = 0;
function mch(obj) {
  if (i == 0) {
    console.log(obj)
    i++
  }
  console.log(obj)
}
</script>       
<template>
  <!---============================================================================================================================================================================================================-->
  <!------------------------------------------------ MODOCOSM SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->
  <!---============================================================================================================================================================================================================-->
  
  <div v-if="article !=undefined">
  <section v-for="(slice, index) in article.data" >
    <!-- <code>{{ createNewObject(JSON.stringify(article.data[index])).nosql_datastore_id.json_datastore }}</code> -->
    <!-- <code>{{ createNewObject(article.data[index].nosql_datastore_id.json_datastore) }}</code> -->
    <!-- <h1>{{ createNewObject(slice.nosql_datastore_id.json_datastore).component }} </h1> -->
    <!-- {{ JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore)) }} -->
    <sliceLogic 
  :sliceData="createNewObject(article.data[index].nosql_datastore_id.json_datastore)"  />
  </section>
  </div>
  <!------------------------------------------------ END SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->
</template>
<!------------------------------------------------ FOOTER START ---------------------------------------------------------------------------------------------------------------------------------------------------->

<!------------------------------------------------ FOOTER END ---------------------------------------------------------------------------------------------------------------------------------------------------->
