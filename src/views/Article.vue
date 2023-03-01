<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';
import { defineProps } from 'vue';
import MorePages from '@/components/MoreArticles.vue';
import sliceLogic from '@/utils/sliceLogic.vue';
                                console.log("Article.Vue","imports Done","\nref","\ndirectus","\nRouterLink","\nuseRoute","\nuseRouter","\ngetAssetURL","\nsliceLogic")

// =========================importing components==================================================
const router = useRouter();     
const route = useRoute();       
const page = ref(null);      
const morePages = ref(null); 
//---prepping data---------------------------------------------------------------------------
fetchData();                    
var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";



//   const res = await directus.items('home').readByQuery(idrp,{
    //   fields: ['*'],
    //   filter: {
      //     _and: [
        //       { id: { _eq: route.params.id } },
        //       { status: { _eq: 'published' }},
        //     ],
        //   }
        // })
        
async function fetchData() {
  const { id } = route.params;
  let pageResponse;
  try {
    pageResponse = await directus.items('home_nosql_datastore').readOne(id, {
      fields: ['sort,nosql_datastore_id,nosql_datastore_id.Slice_Type,id,nosql_datastore_id.short_title,nosql_datastore_id.json_datastore'],
    });
    const formattedpage = { ...pageResponse, }
    morepageResponse = await directus.items('home_nosql_datastore').readByQuery(id,{ 
      fields: ['sort,nosql_datastore_id,nosql_datastore_id.Slice_Type,id,nosql_datastore_id.short_title,nosql_datastore_id.json_datastore' ],
      filter: {
        _and: [
        { home_id: { _eq: route.params.id } },
        { status: { _eq: 'published' }},
        ],
      },
      sort: ['sort'],
    });
    
    const formattedmorePages = morepagesResponse.data.map(
     (moreArticle) => {      return { ...moreArticle, };   }    );
    morePages.value = formattedmorePages;
    page.value = formattedpage;
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
  <!-- <div v-if="page !=undefined"> -->

    <section v-for="(slice, index) in page.data" >
      <div class="codeloop">
      <div class ="">
        
        <code>{{ JSON.stringify(route.params) }}</code>
      </div>
    </div>
      <!-- <code>{{ createNewObject(JSON.stringify(page.data[index])).nosql_datastore_id.json_datastore }}</code> -->
      <!-- <code>{{ createNewObject(page.data[index].nosql_datastore_id.json_datastore) }}</code> -->
      <!-- <h1>{{ createNewObject(slice.nosql_datastore_id.json_datastore).component }} </h1> -->
      <!-- {{ JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore)) }} -->
      <!-- <sliceLogic :sliceData="page.data[index].nosql_datastore_id.json_datastore"  /> -->
    </section>
  <!-- </div> -->
  <!------------------------------------------------ END SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->
</template>
<!------------------------------------------------ FOOTER START ---------------------------------------------------------------------------------------------------------------------------------------------------->

<!------------------------------------------------ FOOTER END ---------------------------------------------------------------------------------------------------------------------------------------------------->
