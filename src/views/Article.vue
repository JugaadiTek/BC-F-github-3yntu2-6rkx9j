<script setup>
import { ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { directus } from "@/services/directus"
import { getAssetURL } from "@/utils/get-asset-url";

console.log("==============\n==== ARTICLE.VUE ====\n==============");
// ======== COMPONENTS ======== /VIEWS/ARTICLE.VUE ======== COMPONENTS ========//
const router = useRouter();
const route = useRoute();
const page = ref(null);
const morePages = ref(null);

// ======== FETCH DATA ======== /VIEWS/ARTICLE.VUE ======== FETCH DATA ========//
fetchData();
async function fetchData() {
  const { id } = route.params.id;
  let pageResponse;
  let NOSQLResponse;
  try {

//=================================================================================//
//=======================  /VIEWS/ARTICLE.VUE =====================================//
//======================= 1. READ ONE ARTICLE =====================================//
//=================================================================================//
console.log("= INDIVIDUAL----FETCH ==\n== START---ARTICLE.VUE =");

    pageResponse = await directus.items("home").readOne(id, {
        fields: ["*", "grab_a_slice.Slide_Type","grab_a_slice.nosql_datastore_id"],
    });    
    NOSQLResponse = await directus.items("home_nosql_datastore").readOne(id, {
        fields: ['nosql_datastore_id','nosql_datastore_id.Slice_Type',
                    'nosql_datastore_id.short_title','nosql_datastore_id.json_datastore'],
        fields: ['sort','id','home_id','home_id.slug',],
      },
      console.log("==-INDIVIDUAL----FETCH-===- END ---ARTICLE.VUE-==")
    );    
// 1.1 FORMATTING DATA ---- /views/Article.vue ---- FORMATTING DATA ----//
console.log("==-INDIVIDUAL---SET-==-VARIABLES---ARTICLE.VUE-==");
    formattedP  = { ...pageResponse,};
    formattedNOSQL = { ...NOSQLResponse,};
// 1.2 SETTING THE DATA ---- /views/Article.vue ---- SETTING THE DATA ----//
    formattedPage = { ...pageResponse, ...NOSQLResponse,};
console.log("==INDIVIDUAL==\n==== ARTICLE.VUE ====\n======END=====");

//=================================================================================//
//=======================  /VIEWS/ARTICLE.VUE =====================================//
//======================= 2. READ MORE ARTICLES ===================================//
//=================================================================================//
console.log("= MORE ARTICLES----FETCH ==\n== START---ARTICLE.VUE =");
    const morePagesResponse = await directus.items("home").readByQuery({
      fields: ["*", "grab_a_slice.Slide_Type","grab_a_slice.nosql_datastore_id"],
      filter: {
        _and: [
          { id: { _neq: pageResponse.id } },
          { status: { _eq: "published" } },
        ],
      },
      limit: 200,
    });
// 2.1 FORMATTING DATA ---- /views/Article.vue ---- FORMATTING DATA ----//
    const formattedMorePages = morePagesResponse.data.map(
          (morePage) => { return { ...morePage, };  }    );
      
// 2.2 SETTING THE DATA ---- /views/article.vue ---- SETTING THE DATA ----//
    article.value = formattedPage;            // 1.1 SETTING THE CURRENT ROUTE
    morePages.value = formattedMorePages;     // 2.1 SETTING THE OTHER ROUTES IN ADVANCE
// 2.3 SETTING THE DATA ---- /views/article.vue ---- SETTING THE DATA ----//
} catch (err) {
// ------- 2.4 REDIRECTING TO 404 PAGE ------
  router.replace({ name: "not-found", params: { catchAll: route.path } });
}
console.log("==MORE ARTICLES==\n==== ARTICLE.VUE ====\n======END=====");
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
  <div v-if="page !=undefined">
    <section v-for="(slice, index) in page.data" >
      <sliceLogic :sliceData="page.data[index].nosql_datastore_id.json_datastore"  />
    </section>
  </div>
  <!------------------------------------------------ END SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->
</template>
<!------------------------------------------------ FOOTER START ---------------------------------------------------------------------------------------------------------------------------------------------------->

<!------------------------------------------------ FOOTER END ---------------------------------------------------------------------------------------------------------------------------------------------------->
