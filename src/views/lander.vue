<script>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';

console.log("==============\n==== LANDER.VUE ====\n==============");
// ======== COMPONENTS ======== /VIEWS/LANDER.VUE ======== COMPONENTS ========//
const router = useRouter();
const route = useRoute();
const lander = ref(null);
const moreLanders = ref(null);
const preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// ======== FETCH DATA ======== /VIEWS/LANDER.VUE ======== FETCH DATA ========//
fetchData();
async function fetchData() {
    const { id } = route.params;
    let landerResponse;
    try {

//=================================================================================//
//=======================  /VIEWS/LANDER.VUE =====================================//
//======================= 1. READ ONE LANDER =====================================//
//=================================================================================//
console.log("= INDIVIDUAL----FETCH ==\n== START---LANDER.VUE =");
    landerResponse = await directus.items("landers").readOne(id, { fields: ["*"],  },
        console.log("==-INDIVIDUAL----FETCH-===- END ---LANDER.VUE-==")        );    
// 1.1 FORMATTING DATA ---- /views/Lander.vue ---- FORMATTING DATA ----===========//
    console.log("==-INDIVIDUAL---SET-==-VARIABLES---LANDER.VUE-==");
        formattedLander = { ...landerResponse,};
        lander.value = formattedLander;
// 1.2 SETTING THE DATA ---- /views/Lander.vue ---- SETTING THE DATA ----========//
        console.log("==INDIVIDUAL==\n==== LANDER.VUE ====\n======END=====");
//=================================================================================//
//=======================  /VIEWS/LANDER.VUE  =====================================//
//======================= 2. READ ALL LANDERS =====================================//
//=================================================================================//
console.log("= INDIVIDUAL----FETCH ==\n== START---LANDER.VUE =");
    landersResponse = await directus.items('landers').readByQuery(id,{
      fields: ['*'],
      filter: {
        _and: [
          { id: { _eq: route.params.id } },
          { status: { _eq: 'published' }},
        ],
      },
      limit: 200,
    });
// 2.1 FORMATTING DATA ---- /views/Lander.vue ---- FORMATTING DATA ----=========//
    const formattedMoreLanders = moreLandersResponse.data.map(
      ( moreLander   ) => { return { ...moreLander,   };       }    );
// 2.2 SETTING THE DATA ---- /views/Lander.vue ---- SETTING THE DATA ----=======//
    const   formattedLander  =  { ...landerResponse, }
            landers.value     =  formattedLanders;
// 2.3 SETTING THE DATA ---- /views/Lander.vue ---- SETTING THE DATA ----=======//
  } catch (err) {   router.replace({ name: 'not-found', params: { catchAll: route.path } });  }
                    console.log("==INDIVIDUAL==\n==== LANDER.VUE ====\n======END=====");
}
</script>
<template><main><div class="container"><div class="inner-container"><!-- MC Containers -->
    <div class="content"><!-- MC CONTENT--><div class="content-block"><!-- MC CONTENT BLOCK-->
        <div class="hero">
            <h2 class="title"></h2><p class="description"></p>
        </div>
    </div></div>
</div></div></main></template>